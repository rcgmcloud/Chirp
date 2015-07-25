var chai = require('chai');
var expect = chai.expect;
var should = chai.should;
var chirp = require('../chirp.js');

describe('chirp', function() {
  it('should be a function', function() {
    expect(chirp).to.be.a('function');
  });
  // it('should be recursive', function() {
  //   expect(chirp).to.(chirp);
  // });
  it('should return a string', function() {
    expect(chirp(2)).to.be.a('string');
  });
  it('should return "cock-a-doodle-doo!" if num is not a number', function() {
    expect(chirp('b')).to.equal('cock-a-doodle-doo!');
  });

  it('should return correct answer', function() {
    expect(chirp(3)).to.equal('chirp chirp chirp');
  });
});
