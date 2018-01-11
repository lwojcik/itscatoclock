const Twitter = require('twitter');
const fs = require('fs');

const twitterApi = require('../config/twitter.js');

const client = new Twitter({
  consumer_key: twitterApi.consumerKey,
  consumer_secret: twitterApi.consumerSecret,
  access_token_key: twitterApi.accessToken,
  access_token_secret: twitterApi.accessTokenSecret,
});

// twitter api methods

const postTweetWithMedia = (image, content) => new Promise((resolve, reject) => {
  const data = fs.readFileSync(image);

  client.post('media/upload', { media: data })
    .then((media) => {
      const status = {
        status: content,
        media_ids: media.media_id_string, // Pass the media id string
      };

      client.post('statuses/update', status)
        .then(() => resolve());
    })
    .catch(error => reject(error));
});

module.exports = {
  postTweetWithMedia,
};
