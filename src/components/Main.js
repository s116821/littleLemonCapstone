import React, { useReducer } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import BookingPage from './BookingPage';
import Homepage from './Homepage';
import ConfirmedBooking from './ConfirmedBooking';
import { fetchAPI, submitAPI } from '../utils/api';


const initializeTimes = () => {
  // Get today's date
  const today = new Date();
  // Use the fetchAPI function to get available times for today
  return fetchAPI(today) || []; // Ensure we always return an array
};

const timesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // Use the fetchAPI function to get available times for the selected date
      return fetchAPI(new Date(action.payload)) || []; // Ensure we always return an array
    default:
      return state;
  }
};

function Main() {
  const [availableTimes, dispatch] = useReducer(timesReducer, [], initializeTimes);
  const navigate = useNavigate();

  const updateTimes = (date) => {
    dispatch({ type: 'UPDATE_TIMES', payload: date });
  };

  const submitForm = (formData) => {
    // Use the submitAPI function to submit the form data
    const isSubmitted = submitAPI(formData);
    if (isSubmitted) {
      navigate('/confirmation');
    }
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route 
          path="/booking" 
          element={
            <BookingPage 
              availableTimes={availableTimes} 
              updateTimes={updateTimes}
              submitForm={submitForm}
            />
          } 
        />
        {/* Add a confirmation route */}
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
}

export default Main;