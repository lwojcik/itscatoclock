require('dotenv').config();
const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const env = process.env;
const twitter = require('../config/twitter.js');

describe('Twitter config', function() {
  it('should define twitter object', function() {
    expect(twitter).to.be.a('object');
  });
  
  it('should define twitter.username property', function() {
    expect(twitter).to.have.property('username');
  });
  
  it('should be able to access non-empty env.ICOC_TWITTER_USERNAME variable', function() {
    expect(env.ICOC_TWITTER_USERNAME).to.be.a('string').that.is.not.empty;
  });
  
  it('should assign twitter.username to be equal to env.ICOC_TWITTER_USERNAME', function() {
    expect(twitter.username).to.equal(env.ICOC_TWITTER_USERNAME);
  });
  
  it('should define twitter.consumerKey property', function() {
    expect(twitter).to.have.property('consumerKey');
  });
  
  it('should be able to access non-empty env.ICOC_TWITTER_CONSUMER_KEY variable', function() {
    expect(env.ICOC_TWITTER_CONSUMER_KEY).to.be.a('string').that.is.not.empty;
  });
  
  it('should assign twitter.consumerKey to be equal to env.ICOC_TWITTER_CONSUMER_KEY', function() {
    expect(twitter.consumerKey).to.equal(env.ICOC_TWITTER_CONSUMER_KEY);
  });
  
  it('should define twitter.consumerSecret property', function() {
    expect(twitter).to.have.property('consumerSecret');
  });
  
  it('should be able to access non-empty env.ICOC_TWITTER_CONSUMER_SECRET variable', function() {
    expect(env.ICOC_TWITTER_CONSUMER_SECRET).to.be.a('string').that.is.not.empty;
  });
  
  it('should assign twitter.consumerSecret to be equal to env.ICOC_TWITTER_CONSUMER_SECRET', function() {
    expect(twitter.consumerSecret).to.equal(env.ICOC_TWITTER_CONSUMER_SECRET);
  });
  
  it('should define twitter.accessToken property', function() {
    expect(twitter).to.have.property('accessToken');
  });
  
  it('should be able to access non-empty env.ICOC_TWITTER_ACCESS_TOKEN variable', function() {
    expect(env.ICOC_TWITTER_ACCESS_TOKEN).to.be.a('string').that.is.not.empty;
  });
  
  it('should assign twitter.accessToken to be equal to env.ICOC_TWITTER_ACCESS_TOKEN', function() {
    expect(twitter.accessToken).to.equal(env.ICOC_TWITTER_ACCESS_TOKEN);
  });
  
  it('should define twitter.accessTokenSecret property', function() {
    expect(twitter).to.have.property('accessTokenSecret');
  });
  
  it('should be able to access non-empty env.ICOC_TWITTER_ACCESS_TOKEN_SECRET variable', function() {
    expect(env.ICOC_TWITTER_ACCESS_TOKEN_SECRET).to.be.a('string').that.is.not.empty;
  });
  
  it('should assign twitter.accessTokenSecret to be equal to env.ICOC_TWITTER_ACCESS_TOKEN_SECRET', function() {
    expect(twitter.accessTokenSecret).to.equal(env.ICOC_TWITTER_ACCESS_TOKEN_SECRET);
  });
});