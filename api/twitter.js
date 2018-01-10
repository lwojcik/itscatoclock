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

const postTweetWithMedia = (image, content, next) => {
  const data = fs.readFileSync(image);

  client.post('media/upload', { media: data }, (error, media) => {
    if (error) throw error;
    if (!error) {
      const status = {
        status: content,
        media_ids: media.media_id_string, // Pass the media id string
      };

      client.post('statuses/update', status, (postError, tweet) => {
        if (postError) throw postError;
        next();
      });
    }
  });
};

module.exports = {
  postTweetWithMedia,
}
