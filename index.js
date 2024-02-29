const axios = require('axios');

function fetchCoordinates(address) {
    const NOMINATIM_API_URL = 'https://nominatim.openstreetmap.org/search';
    const params = {
        q: address,
        format: 'json',
        limit: 1,
    };

    return axios.get(NOMINATIM_API_URL, { params })
        .then(response => {
            const data = response.data;
            if (data.length > 0) {
                const result = data[0];
                return {
                    address: result.display_name,
                    latitude: result.lat,
                    longitude: result.lon
                };
            } else {
                throw new Error('No results found for the given address');
            }
        })
        .catch(error => {
            throw new Error('Failed to fetch coordinates: ' + error.message);
        });
}

module.exports = fetchCoordinates;
