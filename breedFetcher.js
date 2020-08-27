const request = require('request');
const URI = 'https://api.thecatapi.com/v1/breeds/search?q=';

const fetchBreedDescription = function(breedName, callback) {
  request(URI + breedName, (error, response, body) => {
    const data = JSON.parse(body);
    callback(error, data);
  })
};


module.exports = { fetchBreedDescription };