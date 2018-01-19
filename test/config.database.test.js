require('dotenv').config();
const chai = require('chai');
const expect = chai.expect;

const env = process.env;
const database = require('../config/database.js');

describe('Database config', function() {
  it('should define database object', function() {
    expect(database).to.be.a('object');
  });

  it('should define database.url property', function() {
    expect(database).to.have.property('url');
  });
 
  it('should be able to access non-empty env.ICOC_MONGODB_DB_URL variable', function() {
    expect(env.ICOC_MONGODB_DB_URL).to.be.a('string').that.is.not.empty;
  });

  it('database.url should be equal to env.ICOC_MONGODB_DB_URL', function() {
    expect(database.url).to.equal(env.ICOC_MONGODB_DB_URL);
  });
});