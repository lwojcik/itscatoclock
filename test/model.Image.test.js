const chai = require('chai');

const { expect } = chai;

const Image = require('../models/Image.js');

describe('Image model', function() {
  it('should be invalid if name is empty', function(done) {
    const image = new Image();

    image.validate(function(err) {
      expect(err.errors.name).to.exist;
      done();
    });
  });

  it('should be valid Image when name is provided', function(done) {
    const image = new Image({ name: 'sample_name' });

    image.validate(function(err) {
      expect(err).to.not.exist;
      done();
    });
  });
});
