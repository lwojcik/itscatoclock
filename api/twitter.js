'use strict';

const Twitter = require('twitter');

const twitterApi = require('../config/twitter.js');

const client = new Twitter({
    consumer_key: twitterApi.consumerKey,
    consumer_secret: twitterApi.consumerSecret,
    access_token_key: twitterApi.accessToken,
    access_token_secret: twitterApi.accessTokenSecret
  });
   

// twitter api methods

// postTheKitteh (randomCatPic, tweetWithTimes)

const postTheTweet = (media, status) => {
  
  console.log(twitterApi);
  console.log(status);
  client.post('statuses/update', {status: status}, function(error, tweet, response) {
    if (!error) {
      console.log(tweet);
    } else {
      console.log(error);
    }
  });
}

module.exports = {
  postTheTweet: postTheTweet
}