import { useEffect, useRef } from 'react';

import { useHistory } from 'react-router-dom';
import { mount, unmount } from 'auth/AuthApp';
import { Box, Typography } from '@mui/material';
import { useUser } from '@hooks/useUser';

const AuthApp = () => {
  const ref = useRef<HTMLDivElement>(null);
  const history = useHistory();
  const { login } = useUser();

  useEffect(() => {
    if (!ref.current) return;
    mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;

        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
      onSignIn: () => login(),
    }).then(({ onParentNavigate }) => {
      history.listen(onParentNavigate);
    });

    return () => {
      unmount();
    };
  }, [history, login]);

  return (
    <Box sx={{ p: 1, position: 'relative' }}>
      <Typography
        variant="caption"
        color="primary"
        sx={{ position: 'absolute', top: 16, right: 16 }}
      >
        Auth MFE
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

export default AuthApp;
