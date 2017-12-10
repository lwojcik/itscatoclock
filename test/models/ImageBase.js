/* eslint-env mocha */

const { expect } = require('chai');

const ImageBase = require('../../models/ImageBase.js');

describe('ImageBase model', function() {
  it('should define ImageBase object', function() {
    expect(ImageBase).to.be.a('object');
  });

  it('should expose determineNumberOfImages() method', function() {
    expect(ImageBase).to.have.property('determineNumberOfImages').that.is.a('function');
  });

  it('should expose getImage() method', function() {
    expect(ImageBase).to.have.property('getImage').that.is.a('function');
  });
});