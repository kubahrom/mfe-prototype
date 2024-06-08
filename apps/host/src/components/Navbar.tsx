import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Login, Logout, MedicalInformation } from '@mui/icons-material';
import { Button, Stack } from '@mui/material';
import { useUser } from '@hooks/useUser';
import { Link } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export function Navbar() {
  const { user, logout } = useUser();
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

          <Stack direction="row" spacing={1}>
            {user && (
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <InputBase
                  placeholder="Hledat"
                  inputProps={{ 'aria-label': 'hledat' }}
                  sx={{ color: 'inherit', p: 0.5, pl: 6 }}
                />
              </Search>
            )}

            {user ? (
              <Button
                onClick={logout}
                color="inherit"
                sx={{ display: 'flex', gap: 1, minWidth: 'auto' }}
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
