const should = require('should');
const fill = require('../lib/coffeeCode.js');

describe('Coffee script is compiled ok', () => {
  it('when this passed', () => {
    fill('mug', 'coffee').should.equal('Filling the mug with coffee...');
  });
});
