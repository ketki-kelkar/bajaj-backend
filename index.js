const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());


// POST request handler for /bfhl
app.post('/bfhl', (req, res) => {
  const { collegeEmailId, collegeRollNumber, numbers, alphabets } = req.body;

  // Get the highest lowercase alphabet from the array
  const highestLowercaseAlphabet = getHighestLowercaseAlphabet(alphabets);

  const response = {
    is_success: true,
    college_email_id: collegeEmailId,
    college_roll_number: collegeRollNumber,
    numbers,
    alphabets,
    highest_lowercase_alphabet: highestLowercaseAlphabet,
  };

  res.json(response);
  console.log(response); // Log the entire response
});

// GET request handler for /bfhl
app.get('/bfhl', (req, res) => {
  const response = {
    operation_code: 1,
  };

  res.json(response);
});

// Helper function to get the highest lowercase alphabet
function getHighestLowercaseAlphabet(alphabets) {
  const lowercaseAlphabets = alphabets.filter((alphabet) => alphabet === alphabet.toLowerCase());
  const highestLowercaseAlphabet = lowercaseAlphabets.sort((a, b) => b.localeCompare(a))[0];

  return highestLowercaseAlphabet || ''; // Return empty string if no lowercase alphabets
}

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
/*

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // For handling CORS

const app = express();

app.use(cors()); // Allow requests from different origins
app.use(bodyParser.json()); // Parse JSON request bodies

// Hardcoded user ID
const userId = 'john_doe_17091999';

// POST endpoint for /bfhl
app.post('/bfhl', (req, res) => {
  const { collegeEmailId, collegeRollNumber, numbers, alphabets } = req.body;

  // Validate presence of all fields
  if (!collegeEmailId || !collegeRollNumber || !numbers || !alphabets) {
    return res.status(400).json({
      is_success: false,
      message: 'Invalid request: Missing fields',
    });
  }

  // Validate the structure of numbers and alphabets
  if (!Array.isArray(numbers) || !Array.isArray(alphabets)) {
    return res.status(400).json({
      is_success: false,
      message: 'Invalid request: Numbers and Alphabets should be arrays',
    });
  }

  // Get the highest lowercase alphabet
  const highestLowercaseAlphabet = getHighestLowercaseAlphabet(alphabets);

  // Create response
  const response = {
    is_success: true,
    user_id: userId,
    college_email_id: collegeEmailId,
    college_roll_number: collegeRollNumber,
    numbers,
    alphabets,
    highest_lowercase_alphabet: highestLowercaseAlphabet,
  };

  res.json(response);
});

// Function to get the highest lowercase alphabet from an array of alphabets
function getHighestLowercaseAlphabet(alphabets) {
  const lowercaseAlphabets = alphabets.filter((alphabet) => alphabet === alphabet.toLowerCase());
  const highestLowercaseAlphabet = lowercaseAlphabets.sort((a, b) => b.localeCompare(a))[0];
  return highestLowercaseAlphabet;
}

const port = 8000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
*/