import React from 'react';
import { Link } from 'react-router-dom';
import Routes from '../routes';

export function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: 8 }}>
      <Link to={Routes.home}>Home</Link>
      <Link to={Routes.about}>About</Link>
      <Link to="/test">Test</Link>
      <Link to={Routes.login}>Login</Link>
      <Link to={Routes.signup}>Signup</Link>
    </nav>
  );
}
