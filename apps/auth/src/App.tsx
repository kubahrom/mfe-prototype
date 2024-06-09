import { History, MemoryHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { Box, ThemeProvider } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import getTheme from '@libs/theme';
import NotFound from './pages/404';

type Props = {
  history: MemoryHistory | History;
};

const { theme, cache } = getTheme('auth');

export default function App({ history }: Props) {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <Box sx={{ py: 5, mx: 1 }}>
            <Switch>
              <Route path="/auth/login" exact>
                <Login />
              </Route>
              <Route path="/auth/signup" exact>
                <Signup />
              </Route>
              <Route path="*" component={NotFound} />
            </Switch>
          </Box>
        </Router>
      </ThemeProvider>
    </CacheProvider>
  );
}
