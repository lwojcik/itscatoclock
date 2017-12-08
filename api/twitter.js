'use strict';

const Twitter = require('twitter');
const fs = require('fs');

const twitterApi = require('../config/twitter.js');

const client = new Twitter({
    consumer_key: twitterApi.consumerKey,
    consumer_secret: twitterApi.consumerSecret,
    access_token_key: twitterApi.accessToken,
    access_token_secret: twitterApi.accessTokenSecret
  });

// twitter api methods

const postTheTweetWithMedia = (media, content, status) => {
  const data = fs.readFileSync(media);
  
  
  // Make post request on media endpoint. Pass file data as media parameter
  client.post('media/upload', {media: data}, function(error, media, response) {

    if (!error) {

       // If successful, a media object will be returned.
       console.log(media);

       // Lets tweet it
       var status = {
         status: 'I am a tweet',
         media_ids: media.media_id_string // Pass the media id string
       }

       client.post('statuses/update', status, function(error, tweet, response) {
         if (!error) {
           console.log(tweet);
         }
       });

     }
});

  console.log(twitterApi);
  console.log(status);

  // client.post('statuses/update', {status: status}, function(error, tweet, response) {
  //   if (!error) {
  //     console.log(tweet);
  //   } else {
  //     console.log(error);
  //   }
  // });
}

module.exports = {
  postTheTweet: postTheTweet
}