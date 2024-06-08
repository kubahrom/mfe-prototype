import { Suspense, lazy } from 'react';
import { toUp } from '@libs/shared';

import Layout from './components/Layout';
import { Route, Router, Switch } from 'react-router-dom';
import { LoadingScreen } from './components/LoadingScreen';
import { createBrowserHistory } from 'history';

const MarketingLazy = lazy(() => import('./apps/MarketingApp'));
const AuthLazy = lazy(() => import('./apps/AuthApp'));

const history = createBrowserHistory();

export default function App() {
  const test = toUp('shared lib content');

  return (
    <Router history={history}>
      <Layout>
        {test}
        <Suspense fallback={<LoadingScreen />}>
          <Switch>
            <Route path="/test" exact>
              <div style={{ border: '1px solid red' }}>
                <h1>Test page</h1>
              </div>
            </Route>
            <Route path="/auth">
              <AuthLazy />
            </Route>
            <Route path="/">
              <MarketingLazy />
            </Route>
          </Switch>
        </Suspense>
      </Layout>
    </Router>
  );
}
