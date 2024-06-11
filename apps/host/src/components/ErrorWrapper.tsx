import { ErrorOutline } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { PropsWithChildren } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

export const ErrorWrapper = ({ children }: PropsWithChildren) => {
  return (
    <ErrorBoundary
      fallback={
        <Box
          sx={{
            width: '100%',
            height: '70vh',
            display: 'grid',
            placeItems: 'center',
          }}
        >
          <Box sx={{ display: 'grid', justifyItems: 'center' }}>
            <ErrorOutline color="primary" sx={{ fontSize: '3rem' }} />
            <Typography variant="h4" align="center">
              Something went wrong
            </Typography>
          </Box>
        </Box>
      }
    >
      {children}
    </ErrorBoundary>
  );
};
