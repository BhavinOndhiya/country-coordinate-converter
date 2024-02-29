# GeoGuide

This Node.js package provides a simple interface to fetch coordinates for addresses using the Free API.

## Installation

You can install this package via npm. Make sure you have Node.js installed on your system.

```json
{
npm install geoguide
}
```


## Usage

To use this package, require it in your Node.js application and call the `fetchCoordinates` function with the address you want to fetch coordinates for.
```json
const fetchCoordinates = require('geoguide');

fetchCoordinates('changa,Anand,Gujarat')
.then(coordinates => {
console.log('Coordinates:', coordinates);

})
.catch(error => {
console.error('Error:', error.message);
});
```

Replace the address string `'Anand,Gujarat'` with the address you want to fetch coordinates for.

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

### Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue if you encounter any problems or have suggestions for improvements.

### License
This project is licensed under the MIT License - see the LICENSE file for details.

### Author
Bhavin Ondhiya
