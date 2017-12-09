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
  const media = appConfig.imagePath + image;
  const data = fs.readFileSync(media);

  client.post('media/upload', {media: data}, function(error, media, response) {
    if (!error) {
      const status = {
         status: content,
         media_ids: media.media_id_string // Pass the media id string
      }

      client.post('statuses/update', status, function(error, tweet, response) {
        if (!error) {
          console.log(tweet);
        }
      });
    }
  });
};

module.exports = {
  postTweetWithMedia: postTweetWithMedia
}