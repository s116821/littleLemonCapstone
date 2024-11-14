import React from 'react';

const specialsData = [
  { id: 1, name: 'Greek Salad', price: 12.99, description: 'Fresh and delicious Greek salad with feta cheese.' },
  { id: 2, name: 'Bruschetta', price: 5.99, description: 'Grilled bread rubbed with garlic and topped with olive oil and salt.' },
  { id: 3, name: 'Lemon Dessert', price: 5.00, description: 'A delightful lemon dessert to cleanse your palate.' },
];

function Specials() {
  return (
    <section className="specials">
      <h2 className="section-title">This Week's Specials</h2>
      <div className="specials-grid">
        {specialsData.map((special) => (
          <div key={special.id} className="special-card rounded">
            <h3 className="card-title">{special.name}</h3>
            <p className="paragraph-text">{special.description}</p>
            <span className="highlight-text highlight-yellow">${special.price.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Specials;