import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Recipe as RecipeType } from '../types/recipe';
import { Chip, Stack } from '@mui/material';

type Props = {
  recipe: RecipeType;
  like: (recipeId: number) => void;
  liked: boolean;
};

export function Recipe({ recipe, like, liked }: Props) {
  return (
    <Card sx={{ height: '100%' }}>
      <CardHeader
        title={recipe.name}
        subheader={recipe.cuisine}
        action={
          <IconButton
            aria-label="add to favorites"
            onClick={() => like(recipe.id)}
            color={liked ? 'primary' : 'default'}
          >
            <FavoriteIcon />
          </IconButton>
        }
      />
      <CardMedia
        component="img"
        height="194"
        image={recipe.image}
        alt={recipe.name}
      />
      <CardContent>
        <Stack direction="row" flexWrap="wrap" gap={0.5} sx={{ pb: 1 }}>
          {recipe.tags.map((tag) => (
            <Chip key={tag} label={tag} />
          ))}
        </Stack>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            display: '-webkit-box',
            overflow: 'hidden',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 3,
          }}
        >
          {recipe.instructions.join(', ')}
        </Typography>
      </CardContent>
    </Card>
  );
}
