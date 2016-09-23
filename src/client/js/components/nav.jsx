import React from 'react';
import { Link } from 'react-router';

class Nav extends React.Component {

  render() {
    return (
      <nav>
        <ul>
          <li className="navbar-home"><Link to="/">Home</Link></li>
          <li className="navbar-about"><Link to="/about">about</Link></li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
