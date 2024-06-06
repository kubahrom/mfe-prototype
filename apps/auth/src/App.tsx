import { History, MemoryHistory } from 'history';
import { Router, Route, Switch, Link } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Signup';

type Props = {
  history: MemoryHistory | History;
};

export default function App({ history }: Props) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/auth/login" component={Login} />
        <Route path="/auth/signup" component={Home} />
      </Switch>
      <div style={{ display: 'flex', gap: 6 }}>
        <Link to="/auth/login">Login</Link>
        <Link to="/auth/signup">Signup</Link>
        <Link to="/">Home</Link>
      </div>
    </Router>
  );
}
