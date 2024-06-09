import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
  Dashboard,
  Login,
  Logout,
  MedicalInformation,
} from '@mui/icons-material';
import { Button, Stack } from '@mui/material';
import { useUser } from '@hooks/useUser';
import { Link, useLocation } from 'react-router-dom';
import Search from 'dashboard/Search';

export function Navbar() {
  const { user, logout } = useUser();
  // Current location
  const { pathname } = useLocation();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
          sx={{ width: '100%' }}
        >
          <Stack
            component={Link}
            to="/"
            direction="row"
            alignItems="center"
            sx={{ color: 'inherit', textDecoration: 'none' }}
          >
            <MedicalInformation sx={{ mr: 1, mb: 0.5 }} />
            <Typography variant="h6" noWrap>
              MFE
            </Typography>
          </Stack>

          <Stack
            direction="row"
            spacing={1}
            justifyContent="flex-end"
            sx={{ flexGrow: 1 }}
          >
            {user && (
              <>
                {pathname === '/dashboard' && (
                  <Box
                    style={{
                      margin: 'auto',
                    }}
                    sx={{
                      width: { xs: '100%' },
                      maxWidth: 568,
                    }}
                  >
                    <Search />
                  </Box>
                )}
                <Button
                  component={Link}
                  to="/dashboard"
                  color="inherit"
                  sx={{ minWidth: 'auto' }}
                >
                  <Dashboard fontSize="small" />
                </Button>
              </>
            )}

            {user ? (
              <Button
                onClick={logout}
                color="inherit"
                sx={{
                  display: 'flex',
                  gap: 1,
                  minWidth: 'auto',
                  flexShrink: 0,
                }}
              >
                <Logout fontSize="small" />
                <Box
                  component="span"
                  sx={{
                    display: {
                      xs: 'none',
                      sm: 'block',
                    },
                  }}
                >
                  Odhlásit se
                </Box>
              </Button>
            ) : (
              <Button
                to="/auth/login"
                component={Link}
                color="inherit"
                startIcon={<Login />}
              >
                Přihlásit se
              </Button>
            )}
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
