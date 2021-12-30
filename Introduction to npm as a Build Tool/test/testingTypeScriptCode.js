const should = require('should');
const greeter = require('../lib/tsCode.js');

describe('TypeScript is compiled ok', () => {
  it('when this passed', () => {
    const g = new greeter();
    g.greet('Yoda').should.equal("A type-scripting greeting to you, Yoda");
  });
});
