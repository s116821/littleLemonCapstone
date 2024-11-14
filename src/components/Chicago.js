import React from 'react';

function Chicago() {
  return (
    <section className="chicago">
      <h2 className="section-title">Little Lemon Chicago</h2>
      <div className="chicago-content">
        <img src="/path-to-restaurant-image.jpg" alt="Little Lemon Chicago" className="rounded" />
        <div className="chicago-text">
          <p className="lead-text">A taste of the Mediterranean in the heart of Chicago</p>
          <p className="paragraph-text">
            Little Lemon brings the flavors of the Mediterranean to the Windy City. 
            Founded by two Italian brothers, our restaurant offers authentic dishes 
            made with the freshest ingredients and traditional recipes.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Chicago;