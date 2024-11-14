import React from 'react';

const testimonials = [
  { id: 1, name: 'John Doe', rating: 5, comment: 'Amazing food and atmosphere!' },
  { id: 2, name: 'Jane Smith', rating: 4, comment: 'Great service and delicious dishes.' },
  { id: 3, name: 'Mike Johnson', rating: 5, comment: 'Best Mediterranean restaurant in town!' },
];

function CustomersSay() {
  return (
    <section className="customers-say">
      <h2 className="section-title">What Our Customers Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card rounded">
            <div className="star-rating">{'★'.repeat(testimonial.rating)}</div>
            <p className="paragraph-text">{testimonial.comment}</p>
            <p className="highlight-text">{testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CustomersSay;