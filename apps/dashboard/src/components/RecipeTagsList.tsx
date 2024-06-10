import { Box, Chip, CircularProgress, Stack } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

export const RecipeTagsList = () => {
  const { data, isPending } = useQuery({
    queryKey: ['recipe-tags'],
    queryFn: getRecipeTags,
    staleTime: Infinity,
  });

  return (
    <Box sx={{ pt: 6, pb: 2, px: 2 }}>
      {isPending ? (
        <Box sx={{ textAlign: 'center', py: 6 }}>
          <CircularProgress color="secondary" />
        </Box>
      ) : (
        <>
          {data ? (
            <Stack flexWrap="wrap" direction="row" gap={1} sx={{ pb: 2 }}>
              {data.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  color="primary"
                  variant="outlined"
                />
              ))}
            </Stack>
          ) : (
            <Box sx={{ textAlign: 'center', py: 6 }}>No tags found</Box>
          )}
        </>
      )}
    </Box>
  );
};

const getRecipeTags = async () => {
  try {
    const response = await fetch('https://dummyjson.com/recipes/tags', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = (await response.json()) as string[];
    return data;
  } catch (e) {
    throw new Error('Něco se pokazilo!');
  }
};
