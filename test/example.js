const fetchCoordinates = require('../src/index');

// Test case 1: Fetch coordinates for a valid address
fetchCoordinates('1600 Amphitheatre Parkway, Mountain View, CA')
    .then(coordinates => {
        console.log('Coordinates:', coordinates);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });

// Test case 2: Try fetching coordinates for an invalid address
fetchCoordinates('Invalid Address')
    .then(coordinates => {
        console.log('Coordinates:', coordinates);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
