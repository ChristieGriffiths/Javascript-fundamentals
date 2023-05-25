const searchCandies = require('./search');

describe('searchCandies', () => {
  it('returns only the candies which match the search', () => {
    expect(searchCandies('Ma', 10)).toEqual(['Mars', 'Maltesers']);
  });
  it('returns only the candies which match the search', () => {
    expect(searchCandies('Ma', 2)).toEqual(['Mars']);
  });
  it('returns only the candies which match the search', () => {
    expect(searchCandies('ma', 10)).toEqual(['Mars', 'Maltesers']);
  }); 
});