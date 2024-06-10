import { History, MemoryHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import getTheme from '@libs/theme';
import { CacheProvider, ThemeProvider } from '@emotion/react';
import { Box } from '@mui/material';
import NotFound from './pages/404';

type Props = {
  history: MemoryHistory | History;
};

const { theme, cache } = getTheme('auth');

export default function App({ history }: Props) {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            m: {
              xs: 4,
              md: 8,
            },
            borderRadius: 2,
            overflow: 'hidden',
          }}
        >
          <Router history={history}>
            <Switch>
              <Route exact path="/about" component={About} />
              <Route exact path="/" component={Home} />
              <Route path="*" component={NotFound} />
            </Switch>
          </Router>
        </Box>
      </ThemeProvider>
    </CacheProvider>
  );
}
