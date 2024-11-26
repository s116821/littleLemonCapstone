export const fetchAPI = (date) => {
  // This is a mock function that returns some dummy available times
  console.log('Fetching times for:', date);
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

export const submitAPI = (formData) => {
  // This is a mock function that always returns true
  console.log('Submitting form data:', formData);
  return true;
};