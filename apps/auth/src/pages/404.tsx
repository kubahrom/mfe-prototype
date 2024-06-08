import { ErrorOutline } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function NotFound() {
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
          404 | Stránka nenalezena
        </Typography>
        <Button
          variant="contained"
          component={Link}
          to="/"
          color="primary"
          sx={{ mt: 2 }}
        >
          Domů
        </Button>
      </Box>
    </Box>
  );
}
