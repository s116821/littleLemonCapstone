import React, { useReducer } from 'react';
import Homepage from './Homepage';
import { Routes, Route } from 'react-router-dom';
import BookingPage from './BookingPage';

// Reducer function
const timesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // For now, return the same available times regardless of the date
      return state;
    default:
      return state;
  }
};

// Initialize times function
const initializeTimes = () => {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};
function Main() {
  const [availableTimes, dispatch] = useReducer(timesReducer, [], initializeTimes);

  const updateTimes = (date) => {
    dispatch({ type: 'UPDATE_TIMES', payload: date });
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/booking" element={<BookingPage availableTimes={availableTimes} updateTimes={updateTimes} />} />
      </Routes>
    </main>
  );
}

export default Main;
