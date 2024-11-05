import React from 'react';
import logo from '../assets/Logo.svg'; // Import the logo image

function Header() {
  return (
    <header>
      <img src={logo} alt="Little Lemon Logo" className="header-logo" />
      <h1>Little Lemon</h1>
    </header>
  );
}

export default Header;
