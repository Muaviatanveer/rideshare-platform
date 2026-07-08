---
const validateInput = (input) => {
  if (typeof input !== 'string' || input.trim() === '') {
    throw new Error('Invalid input. Input must be a non-empty string.');
  }
};

const sanitizeInput = (input) => {
  return input.trim();
};

const matchDriver = (driverID, driverName) => {
  try {
    validateInput(driverID);
    validateInput(driverName);

    const sanitizedDriverID = sanitizeInput(driverID);
    const sanitizedDriverName = sanitizeInput(driverName);

    // Simulate matching logic
    console.log(`Matching driver with ID: ${sanitizedDriverID} and Name: ${sanitizedDriverName}`);
  } catch (error) {
    console.error(error.message);
  }
};

// Example usage:
matchDriver('12345', 'John Doe');
---