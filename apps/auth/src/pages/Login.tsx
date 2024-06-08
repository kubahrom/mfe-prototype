import { FormEvent } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';
import { useTitle } from '@hooks/useTitle';

type Props = {
  onSignIn?: () => void;
};

export default function Login({ onSignIn }: Props) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSignIn && onSignIn();
  };

  useTitle('Přihlášení • MFE');

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Přihlásit se
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ mt: 1, maxWidth: 500 }}
      >
        <TextField
          margin="normal"
          fullWidth
          id="email"
          label="E-mail"
          name="email"
          autoFocus
        />
        <TextField
          margin="normal"
          fullWidth
          name="password"
          label="Heslo"
          type="password"
          id="password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Přihlásit se
        </Button>
        <Box sx={{ textAlign: 'center' }}>
          <Link to="/auth/signup" component={RouterLink} variant="body2">
            Nemáte účet? Zaregistrujte se
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
