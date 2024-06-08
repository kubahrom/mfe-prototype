import { LinearProgress, styled } from '@mui/material';

const LoadingWrapper = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(1),
}));

export function LoadingScreen() {
  return (
    <div>
      <LoadingWrapper>
        <LinearProgress />
      </LoadingWrapper>
    </div>
  );
}
