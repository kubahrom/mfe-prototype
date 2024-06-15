import { useEffect, useRef } from 'react';
// import { mount, unmount } from 'marketing/MarketingApp';

import { useHistory } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { ErrorWrapper } from '../components/ErrorWrapper';

const { mount, unmount } = await import('marketing/MarketingApp');

const MarketingApp = () => {
  const ref = useRef<HTMLDivElement>(null);
  const history = useHistory();

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
    }).then(({ onParentNavigate }) => {
      history.listen(onParentNavigate);
    });

    return () => {
      unmount();
    };
  }, [history]);

  return (
    <ErrorWrapper>
      <Box sx={{ p: 1, position: 'relative' }}>
        <Typography
          variant="caption"
          color="primary"
          sx={{ position: 'absolute', top: 16, right: 16, fontSize: '1rem' }}
        >
          Marketing MFE
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
    </ErrorWrapper>
  );
};

export default MarketingApp;
