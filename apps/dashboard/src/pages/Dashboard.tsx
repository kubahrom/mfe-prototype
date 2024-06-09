import {
  Container,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import { useTitle } from '@hooks/useTitle';
import { useEffect, useState } from 'react';
import { RecipeList } from '@components/RecipeList';
import { useLike } from '@hooks/useLike';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Dashboard() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'all' | 'bookmarked'>('all');

  const { like, likes } = useLike();

  const handleSearch = (e: Event) => {
    const customEvent = e as CustomEvent<string>;
    setSearch(customEvent.detail);
  };

  const handleFilterChange = (
    _: React.MouseEvent<HTMLElement>,
    newFilter: 'all' | 'bookmarked',
  ) => {
    setFilter(newFilter);
  };

  useEffect(() => {
    window.addEventListener('search', handleSearch as EventListener);

    return () => {
      window.removeEventListener('search', handleSearch as EventListener);
    };
  }, []);

  useTitle('Dashboard • MFE');

  return (
    <Container>
      <Stack
        direction={{ sm: 'row' }}
        justifyContent="space-between"
        gap={1}
        alignItems="flex-start"
        sx={{ pb: 2 }}
      >
        <Typography variant="h3" component="h1">
          Dashboard
        </Typography>
        <ToggleButtonGroup
          color="primary"
          value={filter}
          exclusive
          onChange={handleFilterChange}
          aria-label="filter"
        >
          <ToggleButton value="all" sx={{ py: 1 }}>
            All
          </ToggleButton>
          <ToggleButton
            value="bookmarked"
            sx={{ display: 'flex', gap: 0.5, alignItems: 'center', py: 1 }}
          >
            <FavoriteIcon fontSize="small" color="primary" />
            Bookmarked {likes.length}
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
      <RecipeList search={search} like={like} likes={likes} filter={filter} />
    </Container>
  );
}
