var binaryCount = require('../../main.js');  

describe('Binary Count test', () => {

  it('chai example 1', () => {
    expect(binaryCount(4)).to.equal(1);
  });

  it('chai example 2', () => {
    expect(binaryCount(15)).to.equal(4);
  });

  it('chai example 3', () => {
    expect(binaryCount(1)).to.equal(1);
  });

  it('chai example 4', () => {
    expect(binaryCount(1022)).to.equal(9);
  });

});