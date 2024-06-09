import { History, MemoryHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import { Box, ThemeProvider } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import getTheme from '@libs/theme';
import NotFound from './pages/404';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

type Props = {
  history: MemoryHistory | History;
};

const { theme, cache } = getTheme('auth');

const queryClient = new QueryClient();

export default function App({ history }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      <CacheProvider value={cache}>
        <ThemeProvider theme={theme}>
          <Router history={history}>
            <Box sx={{ py: 5, mx: 1 }}>
              <Switch>
                <Route path="/dashboard" exact>
                  <Dashboard />
                </Route>
                <Route path="*" component={NotFound} />
              </Switch>
            </Box>
          </Router>
        </ThemeProvider>
      </CacheProvider>
    </QueryClientProvider>
  );
}
