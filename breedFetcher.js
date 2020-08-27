const request = require('request');
const URI = 'https://api.thecatapi.com/v1/breeds/search?q=';

const fetchBreedDescription = function(breedName, callback) {
  request(URI + breedName, (error, response, body) => {
    const data = JSON.parse(body);
    if (data.length === 0) {
      return callback(error, data);
    }
    const desc = data[0].description;
    callback(error, desc);
  });
};

module.exports = { fetchBreedDescription };