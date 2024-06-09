import { useEffect, useRef } from 'react';

import { useHistory } from 'react-router-dom';
import { mount, unmount } from 'dashboard/DashboardApp';
import { Box, Typography } from '@mui/material';
import { useUser } from '@hooks/useUser';

const DashboardApp = () => {
  const ref = useRef<HTMLDivElement>(null);
  const history = useHistory();
  const { user } = useUser();

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
      userId: user?.uid || undefined,
    }).then(({ onParentNavigate }) => {
      history.listen(onParentNavigate);
    });

    return () => {
      unmount();
    };
  }, [history, user?.uid]);

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

export default DashboardApp;
