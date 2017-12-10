const chai = require('chai');

const expect = chai.expect;

const BanList = require('../../models/BanList.js');

describe('BanList Model', function() {
  it('should define BanList object', function() {
    expect(BanList).to.be.a('object');
  });

  it('should expose addImage() method', function() {
    expect(BanList).to.have.property('addImage').that.is.a('function');
  });

  it('should expose isImageBanned() method', function() {
    expect(BanList).to.have.property('isImageBanned').that.is.a('function');
  });

  it('should expose purge() method', function() {
    expect(BanList).to.have.property('purge').that.is.a('function');
  });
});