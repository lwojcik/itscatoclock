require('dotenv').config();
const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const Twitter = require('twitter');


const env = process.env;
const twitterConfig = require('../../config/twitter.js');
const twitterApi = require('../../api/twitter.js');

describe('Twitter API library', function() {
  it('should import Twitter API library', function() {
    expect(Twitter).to.be.a('function');
  });

  it('should expose options object', function() {
    expect(Twitter().options).to.be.a('object');
  });

  it('should expose request method', function() {
    expect(Twitter().request).to.be.a('function');
  });

  it('should use https://api.twitter.com/1.1 as base url', function() {
    expect(Twitter().options.rest_base).to.equal('https://api.twitter.com/1.1');
  });

  it('should use https://upload.twitter.com/1.1 as media base url', function() {
    expect(Twitter().options.media_base).to.equal('https://upload.twitter.com/1.1');
  });

  it('should be able to access request.post() method', function() {
    expect(Twitter().request.post).to.be.a('function');
  });

  it('should be able to access Twitter config object', function() {
    expect(twitterConfig).to.be.a('object').that.is.not.empty;
  });

  it('should be able to access non-empty consumerKey config property', function() {
    expect(twitterConfig).to.have.property('consumerKey').that.is.not.empty;
  });

  it('should be able to access non-empty consumerSecret config property', function() {
    expect(twitterConfig).to.have.property('consumerSecret').that.is.not.empty;
  });

  it('should be able to access non-empty accessToken config property', function() {
    expect(twitterConfig).to.have.property('accessToken').that.is.not.empty;
  });

  it('should be able to access non-empty accessTokenSecret config property', function() {
    expect(twitterConfig).to.have.property('accessTokenSecret').that.is.not.empty;
  });

  it('should be able to access non-empty accessTokenSecret config property', function() {
    expect(twitterConfig).to.have.property('accessTokenSecret').that.is.not.empty;
  });
});

describe('Twitter API abstraction', function() {
  it('should expose postTweetWithMedia() method', function() {
    expect(twitterApi).to.have.property('postTweetWithMedia').that.is.a('function');
  });
});