'use strict';

const Twitter = require('twitter');
const fs = require('fs');

const appConfig = require('../config/app.js');
const twitterApi = require('../config/twitter.js');

const client = new Twitter({
    consumer_key: twitterApi.consumerKey,
    consumer_secret: twitterApi.consumerSecret,
    access_token_key: twitterApi.accessToken,
    access_token_secret: twitterApi.accessTokenSecret
  });

// twitter api methods

const postTweetWithMedia = (image, content, next) => {
  const data = fs.readFileSync(image);

  client.post('media/upload', {media: data}, function(error, media, response) {
    if (error) throw error;
    if (!error) {
      const status = {
         status: content,
         media_ids: media.media_id_string // Pass the media id string
      }

      client.post('statuses/update', status, function(error, tweet, response) {
        if (error) throw error;
        next();
      });
    }
  });
};

module.exports = {
  postTweetWithMedia: postTweetWithMedia
}