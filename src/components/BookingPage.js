import React from 'react';
import BookingForm from './BookingForm';

function BookingPage({ availableTimes, updateTimes }) {
  return (
    <div className="booking-page">
      <h1>Book a Table</h1>
      <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />
    </div>
  );
}

export default BookingPage;