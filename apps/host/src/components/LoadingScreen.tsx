import { Box, CircularProgress, Stack } from '@mui/material';
import { useGlobalStoreState } from '@store/GlobalStore';

export function LoadingScreen() {
  const { init } = useGlobalStoreState();

  const autoLogin = localStorage.getItem('mfe-auto-login');

  if (!autoLogin || init) {
    return null;
  }

  return (
    <Box
      sx={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'white',
        width: '100%',
        height: '100vh',
        zIndex: 9999,
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <Stack spacing={2} alignItems="center">
        <CircularProgress color="secondary" size={60} />
      </Stack>
    </Box>
  );
}
