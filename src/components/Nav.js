import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <nav className="main-nav">
      <ul className="nav-list">
        <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
        <li className="nav-item"><Link to="/booking" className="nav-link">Reservations</Link></li>
        <li className="nav-item"><a href="#menu" className="nav-link">Menu</a></li>
        <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
      </ul>
    </nav>
  );
}

export default Nav;

