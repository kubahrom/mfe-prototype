import { useEffect, useRef } from 'react';

import { useHistory } from 'react-router-dom';
import { mount, unmount } from 'dashboard/RecipeTags';
import { Box, Typography } from '@mui/material';

const RecipeTagsApp = () => {
  const ref = useRef<HTMLDivElement>(null);
  const history = useHistory();

  useEffect(() => {
    if (!ref.current) return;
    mount(ref.current);

    return () => {
      unmount();
    };
  }, [history]);

  return (
    <Box sx={{ p: 1, position: 'relative' }}>
      <Typography
        variant="caption"
        color="primary"
        sx={{ position: 'absolute', top: 16, right: 16, fontSize: '1rem' }}
      >
        Dashboard MFE
      </Typography>
      <Box
        sx={{
          border: '1px solid',
          borderColor: 'primary.main',
          borderRadius: 2,
        }}
        ref={ref}
      />
    </Box>
  );
};

export default RecipeTagsApp;
