import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './Main';

// Mock the fetchAPI function
jest.mock('../utils/api', () => ({
  fetchAPI: jest.fn((date) => ['17:00', '18:00', '19:00', '20:00', '21:00']),
  submitAPI: jest.fn((formData) => true),
}));

describe('Main component', () => {
  test('initializeTimes returns non-empty array', () => {
    render(
      <Router>
        <Main />
      </Router>
    );
    
    // We can't directly access initializeTimes, so we'll check if the BookingForm renders with times
    const timeSelect = screen.getByLabelText(/Choose time/i);
    expect(timeSelect.children.length).toBeGreaterThan(1);
  });

  test('updateTimes returns the expected times', () => {
    render(
      <Router>
        <Main />
      </Router>
    );

    // Again, we can't directly access updateTimes, so we'll check if the BookingForm updates with new times
    const dateInput = screen.getByLabelText(/Choose date/i);
    fireEvent.change(dateInput, { target: { value: '2023-06-20' } });

    const timeSelect = screen.getByLabelText(/Choose time/i);
    expect(timeSelect.children.length).toBeGreaterThan(1);
    expect(timeSelect.children[1].textContent).toBe('17:00');
    expect(timeSelect.children[2].textContent).toBe('18:00');
    // ... you can add more assertions here
  });
});