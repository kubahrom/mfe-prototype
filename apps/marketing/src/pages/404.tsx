import { useTitle } from '@hooks/useTitle';
import { ErrorOutline } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function NotFound() {
  useTitle('Page not found • MFE');
  return (
    <Box
      sx={{
        width: '100%',
        height: '70vh',
        display: 'grid',
        placeItems: 'center   ',
      }}
    >
      <Box sx={{ display: 'grid', justifyItems: 'center' }}>
        <ErrorOutline color="primary" sx={{ fontSize: '3rem' }} />
        <Typography variant="h4" align="center">
          404 | Page not found
        </Typography>
        <Button
          variant="contained"
          component={Link}
          to="/"
          color="primary"
          sx={{ mt: 2 }}
        >
          Home
        </Button>
      </Box>
    </Box>
  );
}
