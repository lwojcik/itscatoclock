require('dotenv').config();

const { expect } = require('chai');

const Twitter = require('twitter');

const twitterConfig = require('../../config/twitter.js');
const twitterApi = require('../../api/twitter.js');

describe('Twitter API library', () => {
  it('should import Twitter API library', () => {
    expect(Twitter).to.be.a('function');
  });

  it('should expose options object', () => {
    expect(Twitter().options).to.be.a('object');
  });

  it('should expose request method', () => {
    expect(Twitter().request).to.be.a('function');
  });

  it('should use https://api.twitter.com/1.1 as base url', () => {
    expect(Twitter().options.rest_base).to.equal('https://api.twitter.com/1.1');
  });

  it('should use https://upload.twitter.com/1.1 as media base url', () => {
    expect(Twitter().options.media_base).to.equal('https://upload.twitter.com/1.1');
  });

  it('should be able to access request.post() method', () => {
    expect(Twitter().request.post).to.be.a('function');
  });

  it('should be able to access Twitter config object', () => {
    expect(twitterConfig).to.be.a('object').that.is.not.empty;
  });

  it('should be able to access non-empty consumerKey config property', () => {
    expect(twitterConfig).to.have.property('consumerKey').that.is.not.empty;
  });

  it('should be able to access non-empty consumerSecret config property', () => {
    expect(twitterConfig).to.have.property('consumerSecret').that.is.not.empty;
  });

  it('should be able to access non-empty accessToken config property', () => {
    expect(twitterConfig).to.have.property('accessToken').that.is.not.empty;
  });

  it('should be able to access non-empty accessTokenSecret config property', () => {
    expect(twitterConfig).to.have.property('accessTokenSecret').that.is.not.empty;
  });

  it('should be able to access non-empty accessTokenSecret config property', () => {
    expect(twitterConfig).to.have.property('accessTokenSecret').that.is.not.empty;
  });
});

describe('Twitter API abstraction', () => {
  it('should expose postTweetWithMedia() method', () => {
    expect(twitterApi).to.have.property('postTweetWithMedia').that.is.a('function');
  });
});