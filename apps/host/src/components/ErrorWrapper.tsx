import { ErrorOutline } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { PropsWithChildren } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

type Props = {
  name: string;
} & PropsWithChildren;

export const ErrorWrapper = ({ children, name }: Props) => {
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
            <Typography
              variant="h6"
              component="p"
              align="center"
              color="text.secondary"
              sx={{ pt: 1 }}
            >
              Error with loading {name} MFE
            </Typography>
          </Box>
        </Box>
      }
    >
      {children}
    </ErrorBoundary>
  );
};
