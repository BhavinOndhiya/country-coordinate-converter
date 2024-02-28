# OpenStreetMap Geocoder

This Node.js package provides a simple interface to fetch coordinates for addresses using the OpenStreetMap Nominatim API.

## Installation

You can install this package via npm. Make sure you have Node.js installed on your system.

npm install openstreetmap-geocoder


## Usage

To use this package, require it in your Node.js application and call the `fetchCoordinates` function with the address you want to fetch coordinates for.

const fetchCoordinates = require('openstreetmap-geocoder');

fetchCoordinates('1600 Amphitheatre Parkway, Mountain View, CA')
.then(coordinates => {
console.log('Coordinates:', coordinates);
})
.catch(error => {
console.error('Error:', error.message);
});


Replace the address string `'1600 Amphitheatre Parkway, Mountain View, CA'` with the address you want to fetch coordinates for.

## API

### `fetchCoordinates(address)`

- `address` (string): The address for which you want to fetch coordinates.

Returns a Promise that resolves to an object containing the latitude and longitude coordinates.

### Example Response

```json
{
    "latitude": 37.4219999,
    "longitude": -122.0840575
}
```
### Running Tests
To run tests for this package, you can use the following command:

bash
Copy code
npm test
Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue if you encounter any problems or have suggestions for improvements.

License
This project is licensed under the MIT License - see the LICENSE file for details.

# Author

Bhavin Ondhiya