import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul>
        <Link to="/">Shop</Link>
        <Link to="/">Admin</Link>
      </ul>
    </nav>
  );
}

export default Nav;