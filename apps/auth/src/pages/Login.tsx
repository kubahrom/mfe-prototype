import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';
import { useTitle } from '@hooks/useTitle';
import { useLogin } from '@hooks/useLogin';

export default function Login() {
  const {
    methods: {
      register,
      formState: { errors },
    },
    onSubmit,
    isLoading,
  } = useLogin();

  useTitle('Login • MFE');

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
        Login
      </Typography>
      <Box
        component="form"
        onSubmit={onSubmit}
        sx={{ mt: 1, maxWidth: 500, width: '100%' }}
      >
        <TextField
          margin="normal"
          fullWidth
          id="email"
          label="E-mail"
          {...register('email')}
          autoFocus
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          margin="normal"
          fullWidth
          {...register('password')}
          label="Password"
          type="password"
          id="password"
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        {errors.root && (
          <Typography
            color="error"
            variant="body1"
            sx={{ textAlign: 'center' }}
          >
            {errors.root.message}
          </Typography>
        )}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          disabled={isLoading}
        >
          Login
        </Button>
        <Box sx={{ textAlign: 'center' }}>
          <Link to="/auth/signup" component={RouterLink} variant="body2">
            Don't have an account? Sign Up
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
