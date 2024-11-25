import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('BookingForm', () => {
  const mockAvailableTimes = ['17:00', '18:00', '19:00'];
  const mockUpdateTimes = jest.fn();

  test('renders all form fields', () => {
    render(<BookingForm availableTimes={mockAvailableTimes} updateTimes={mockUpdateTimes} />);
    
    expect(screen.getByLabelText(/Choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Make Your reservation/i })).toBeInTheDocument();
  });

  test('displays all available times', () => {
    render(<BookingForm availableTimes={mockAvailableTimes} updateTimes={mockUpdateTimes} />);
    
    const timeSelect = screen.getByLabelText(/Choose time/i);
    mockAvailableTimes.forEach(time => {
      expect(screen.getByRole('option', { name: time })).toBeInTheDocument();
    });
  });

  test('calls updateTimes when date changes', () => {
    render(<BookingForm availableTimes={mockAvailableTimes} updateTimes={mockUpdateTimes} />);
    
    const dateInput = screen.getByLabelText(/Choose date/i);
    fireEvent.change(dateInput, { target: { value: '2023-06-20' } });
    
    expect(mockUpdateTimes).toHaveBeenCalledWith('2023-06-20');
  });

  test('submits the form with correct data', () => {
    const mockSubmit = jest.fn();
    render(<BookingForm availableTimes={mockAvailableTimes} updateTimes={mockUpdateTimes} onSubmit={mockSubmit} />);
    
    fireEvent.change(screen.getByLabelText(/Choose date/i), { target: { value: '2023-06-20' } });
    fireEvent.change(screen.getByLabelText(/Choose time/i), { target: { value: '18:00' } });
    fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: '4' } });
    fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: 'Anniversary' } });
    
    fireEvent.click(screen.getByRole('button', { name: /Make Your reservation/i }));
    
    expect(mockSubmit).toHaveBeenCalledWith({
      date: '2023-06-20',
      time: '18:00',
      guests: 4,
      occasion: 'Anniversary'
    });
  });
});