import React from 'react';
import { Link } from 'react-router-dom';

function CallToAction() {
  return (
    <section className="call-to-action">
      <h1 className="display-title">Welcome to Little Lemon</h1>
      <p className="lead-text">Experience the best Mediterranean cuisine in Chicago</p>
      <Link to="/booking" className="cta-button rounded">Reserve a Table</Link>
    </section>
  );
}

export default CallToAction;