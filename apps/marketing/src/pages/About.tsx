import { Loading } from '@components/Loading';
import { Container, Typography } from '@mui/material';
import { Suspense, lazy } from 'react';

const LazyRecipeTagsApp = lazy(() => import('../components/RecipeTagsApp'));

export default function About() {
  return (
    <Container>
      <Suspense fallback={<Loading />}>
        <div>
          <Typography variant="h4" component="h1">
            About static page
          </Typography>
          <Typography
            variant="body1"
            sx={{ pt: 2, pb: 1, color: (theme) => theme.palette.grey[600] }}
          >
            Here is a marketing MFE loading recipe tags from Dasboard MFE which
            is responsible for managing recipes and all logic related to them.
            Data used in this application is used from{' '}
            <a
              href="https://dummyjson.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              https://dummyjson.com/
            </a>
            .
          </Typography>
          <Typography variant="h5" component="p" sx={{ pt: 1, pb: 1 }}>
            List of recipe tags:
          </Typography>
          <LazyRecipeTagsApp />
        </div>
      </Suspense>
    </Container>
  );
}
