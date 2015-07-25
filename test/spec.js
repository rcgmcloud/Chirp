var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var chirp = require('../chirp.js');
var sandbox;

// beforeEach(function() {
//   // create a sandbox
//   sandbox = sinon.sandbox.create();
//   sinon.spy(window.console, "log");
// });

// afterEach(function() {
//   sandbox.restore();
//   console.log.restore();
// });

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
  it('should return an empty string if num is 0 or less', function() {
    expect(chirp(0)).to.equal("");
    expect(chirp(-5)).to.equal("");
  });

  it('should return correct answer', function() {
    expect(chirp(2)).to.equal('chirp chirp');
    expect(chirp(3)).to.equal('chirp chirp chirp');
    expect(chirp(4)).to.equal('chirp chirp chirp chirp');
  });

  it('should replace "chirp" with word parameter', function() {
    expect(chirp(2, "stahp")).to.equal('stahp stahp');
    expect(chirp(3, "YES!")).to.equal('YES! YES! YES!');
  });
});
