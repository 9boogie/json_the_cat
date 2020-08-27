const request = require('request');
const breedName = process.argv[2];
const URI = 'https://api.thecatapi.com/v1/breeds/search?q=';
const inputURI = URI + breedName;

request(inputURI, (error, response, body) => {
  if (error) {
    console.log('Request fail!', error);
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log(breedName + ' is not found!');
  } else {
    console.log(data);
  }
});