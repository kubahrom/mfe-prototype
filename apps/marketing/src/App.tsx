import { History, MemoryHistory } from 'history';
import { Router, Route, Switch, Link } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';

type Props = {
  history: MemoryHistory | History;
};

export default function App({ history }: Props) {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/" component={Home} />
      </Switch>
      <div style={{ display: 'flex', gap: 6 }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/auth/login">Login</Link>
      </div>
    </Router>
  );
}
