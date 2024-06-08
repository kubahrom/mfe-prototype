import Layout from './components/Layout';
import { createBrowserHistory } from 'history';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { useUser } from '@hooks/useUser';

const MarketingLazy = lazy(() => import('./apps/MarketingApp'));
const AuthLazy = lazy(() => import('./apps/AuthApp'));

const history = createBrowserHistory();

export default function App() {
  const { user } = useUser();
  return (
    <>
      <Router history={history}>
        <Layout>
          <Suspense fallback={<LoadingScreen />}>
            <Switch>
              <Route path="/auth">
                {user ? <Redirect to="/about" /> : <AuthLazy />}
              </Route>
              <Route path="/">
                <MarketingLazy />
              </Route>
            </Switch>
          </Suspense>
        </Layout>
      </Router>
    </>
  );
}
