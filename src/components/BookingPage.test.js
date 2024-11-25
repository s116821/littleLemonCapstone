import React from 'react';
import { render, screen } from '@testing-library/react';
import BookingPage from './BookingPage';

// Mock the BookingForm component
jest.mock('./BookingForm', () => {
  return function DummyBookingForm() {
    return <div data-testid="booking-form">Booking Form</div>;
  };
});

describe('BookingPage', () => {
  const mockAvailableTimes = ['17:00', '18:00', '19:00'];
  const mockUpdateTimes = jest.fn();

  test('renders booking page title', () => {
    render(<BookingPage availableTimes={mockAvailableTimes} updateTimes={mockUpdateTimes} />);
    const titleElement = screen.getByText(/Book a Table/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders BookingForm component', () => {
    render(<BookingPage availableTimes={mockAvailableTimes} updateTimes={mockUpdateTimes} />);
    const bookingFormElement = screen.getByTestId('booking-form');
    expect(bookingFormElement).toBeInTheDocument();
  });

  test('passes availableTimes and updateTimes to BookingForm', () => {
    render(<BookingPage availableTimes={mockAvailableTimes} updateTimes={mockUpdateTimes} />);
    const bookingFormElement = screen.getByTestId('booking-form');
    expect(bookingFormElement).toHaveAttribute('availableTimes', JSON.stringify(mockAvailableTimes));
    expect(bookingFormElement).toHaveAttribute('updateTimes', mockUpdateTimes.toString());
  });
});