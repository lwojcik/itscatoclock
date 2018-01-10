require('dotenv').config();

const { env } = process;

const twitter = {};

twitter.username = env.ICOC_TWITTER_USERNAME;
twitter.consumerKey = env.ICOC_TWITTER_CONSUMER_KEY; 
twitter.consumerSecret = env.ICOC_TWITTER_CONSUMER_SECRET;
twitter.accessToken = env.ICOC_TWITTER_ACCESS_TOKEN;
twitter.accessTokenSecret = env.ICOC_TWITTER_ACCESS_TOKEN_SECRET;

module.exports = twitter;
