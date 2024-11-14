import React from 'react';

function BookingPage() {
  return (
    <div className="booking-page">
      <h1 className="display-title">Reserve a Table</h1>
      <form className="booking-form">
        <input type="text" placeholder="Name" className="rounded" />
        <input type="email" placeholder="Email" className="rounded" />
        <input type="date" className="rounded" />
        <input type="time" className="rounded" />
        <input type="number" placeholder="Number of guests" min="1" max="10" className="rounded" />
        <button type="submit" className="cta-button rounded">Book Now</button>
      </form>
    </div>
  );
}

export default BookingPage;