import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';
import { useTitle } from '@hooks/useTitle';
import { useSignup } from '@hooks/useSignup';

export default function Signup() {
  const {
    methods: {
      register,
      formState: { errors },
    },
    onSubmit,
    isLoading,
  } = useSignup();

  useTitle('Registrace • MFE');

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
        Zaregistrovat se
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
          label="Heslo"
          type="password"
          id="password"
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <TextField
          margin="normal"
          fullWidth
          {...register('passwordConfirmation')}
          label="Heslo znovu"
          type="password"
          id="password_confirmation"
          error={!!errors.passwordConfirmation}
          helperText={errors.passwordConfirmation?.message}
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
          Zaregistrovat se
        </Button>
        <Box sx={{ textAlign: 'center' }}>
          <Link to="/auth/login" component={RouterLink} variant="body2">
            Už máte účet? Přihlaste se
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
