require('dotenv').config();
const chai = require('chai');
const expect = chai.expect;

const env = process.env;
const app = require('../../config/app.js');

describe('App config', function() {
  it('should define app object', function() {
    expect(app).to.be.a('object');
  })
  ;
  it('should define app.imagePath property', function() {
    expect(app).to.have.property('imagePath');
  });

  it('should be able to access non-empty env.ICOC_IMAGE_PATH variable', function() {
    expect(env.ICOC_IMAGE_PATH).to.be.a('string');
  });

  it('should assign app.imagePath to be equal to env.ICOC_IMAGE_PATH', function() {
    expect(app.imagePath).to.equal(env.ICOC_IMAGE_PATH);
  });
});