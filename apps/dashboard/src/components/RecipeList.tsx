import { useQuery } from '@tanstack/react-query';
import { useMemo, useState } from 'react';
import { Recipes } from '../types/recipe';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Recipe } from './Recipe';
import { Box, Button, CircularProgress, Typography } from '@mui/material';
import { RecipeFilter } from './RecipeFilter';

type Props = {
  search: string;
  like: (recipeId: number) => void;
  likes: number[];
  filter: 'all' | 'bookmarked';
};

export const RecipeList = ({ search, like, likes, filter }: Props) => {
  const [selectedCuisine, setSelectedCuisine] = useState<string[]>([]);

  const { data, isPending } = useQuery({
    queryKey: ['recipes'],
    queryFn: getRecipes,
    staleTime: Infinity,
  });

  const filteredData = useMemo(() => {
    if (!data) return [];
    const filteredData =
      filter === 'all'
        ? data.recipes
        : data.recipes.filter((recipe) => likes.includes(recipe.id));
    const filteredDataByCuisine =
      selectedCuisine.length > 0
        ? filteredData.filter((recipe) =>
            selectedCuisine.includes(recipe.cuisine),
          )
        : filteredData;
    return filteredDataByCuisine.filter((recipe) => {
      const searchLower = search.toLowerCase();
      return (
        recipe.name.toLowerCase().includes(searchLower) ||
        recipe.tags.some((tag) => tag.toLowerCase().includes(searchLower)) ||
        recipe.cuisine.toLowerCase().includes(searchLower)
      );
    });
  }, [data, search, selectedCuisine, filter, likes]);

  const cuisines = useMemo(() => {
    if (!data) return [];
    const cuisines = data.recipes.map((recipe) => recipe.cuisine);
    return [...new Set(cuisines)];
  }, [data]);

  const clearFilters = () => {
    setSelectedCuisine([]);

    const customEvent = new CustomEvent('search-reset', {
      detail: '',
    });
    window.dispatchEvent(customEvent);
  };

  return (
    <>
      {isPending ? (
        <Box sx={{ textAlign: 'center', py: 6 }}>
          <CircularProgress color="secondary" />
        </Box>
      ) : (
        <>
          {data && (
            <>
              <RecipeFilter
                cuisines={cuisines}
                selected={selectedCuisine}
                setSelected={setSelectedCuisine}
              />

              {filteredData.length ? (
                <>
                  <Grid container spacing={2}>
                    {filteredData.map((recipe) => (
                      <Grid key={recipe.id} xs={12} sm={6} md={4}>
                        <Recipe
                          recipe={recipe}
                          like={like}
                          liked={likes.includes(recipe.id)}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </>
              ) : (
                <>
                  {filter === 'all' || search || selectedCuisine.length ? (
                    <Box sx={{ textAlign: 'center', py: 6 }}>
                      <Typography
                        variant="h5"
                        sx={{ textAlign: 'center', pb: 1 }}
                      >
                        No recipes found
                      </Typography>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={clearFilters}
                      >
                        Clear filters
                      </Button>
                    </Box>
                  ) : (
                    <Box sx={{ textAlign: 'center', py: 6 }}>
                      <Typography
                        variant="h5"
                        sx={{ textAlign: 'center', pb: 1 }}
                      >
                        You haven't bookmarked any recipes yet
                      </Typography>
                    </Box>
                  )}
                </>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

const getRecipes = async () => {
  try {
    const response = await fetch('https://dummyjson.com/recipes', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = (await response.json()) as Recipes;
    return data;
  } catch (e) {
    throw new Error('Něco se pokazilo!');
  }
};
