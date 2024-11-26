import React, { useState, useEffect } from 'react';

function BookingForm({ availableTimes = [], updateTimes, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  useEffect(() => {
    console.log('Available times:', availableTimes);
    console.log('updateTimes function:', updateTimes);
  }, [availableTimes, updateTimes]);

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    if (typeof updateTimes === 'function') {
      updateTimes(newDate);
    } else {
      console.error('updateTimes is not a function:', updateTimes);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof submitForm === 'function') {
      submitForm({ date, time, guests, occasion });
    } else {
      console.error('submitForm is not a function:', submitForm);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '300px', gap: '20px' }}>
      <label htmlFor="res-date">Choose date</label>
      <input 
        type="date" 
        id="res-date" 
        value={date} 
        onChange={handleDateChange}
        required
      />

      <label htmlFor="res-time">Choose time</label>
      <select 
        id="res-time" 
        value={time} 
        onChange={(e) => setTime(e.target.value)}
        required
      >
        <option value="">Select a time</option>
        {Array.isArray(availableTimes) ? (
          availableTimes.map((timeOption) => (
            <option key={timeOption} value={timeOption}>{timeOption}</option>
          ))
        ) : (
          <option value="">No available times</option>
        )}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input 
        type="number" 
        placeholder="1" 
        min="1" 
        max="10" 
        id="guests" 
        value={guests} 
        onChange={(e) => setGuests(parseInt(e.target.value))}
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select 
        id="occasion" 
        value={occasion} 
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input type="submit" value="Make Your reservation" />
    </form>
  );
}

export default BookingForm;