import Layout from './components/Layout';
import { createBrowserHistory } from 'history';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Loading } from './components/Loading';
import { useUser } from '@hooks/useUser';
import { LoadingScreen } from './components/LoadingScreen';

const MarketingLazy = lazy(() => import('./apps/MarketingApp'));
const AuthLazy = lazy(() => import('./apps/AuthApp'));
const DashboardLazy = lazy(() => import('./apps/DashboardApp'));

const history = createBrowserHistory();

export default function App() {
  const { user } = useUser();

  return (
    <>
      <Router history={history}>
        <Layout>
          <LoadingScreen />
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route path="/auth">
                {user ? <Redirect to="/dashboard" /> : <AuthLazy />}
              </Route>
              <Route path="/dashboard">
                {!user ? <Redirect to="/auth/login" /> : <DashboardLazy />}
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
