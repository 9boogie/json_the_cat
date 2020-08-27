const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns an error when null is typed', (done) => {
    fetchBreedDescription('Siberian', (err) => {
      assert.equal(err, null);
      done();
    });
  });

  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors. ";
      assert.equal(expectedDesc, desc);
      done();
    });
  });
  
  it('returns an error when invalid breed name is entered', (done) => {
    fetchBreedDescription('newKittyKing', (error) => {
      const expectedDesc = error;
      assert.equal(error,expectedDesc);
      done();
    });
  });
});