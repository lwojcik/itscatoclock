'use strict';

const Twitter = require('twitter');

// twitter api methods

// postTheKitteh (randomCatPic, tweetWithTimes)

const postTheTweet = (media, tweet) => {
    console.log('cat pic:')
    console.log(media);
    console.log('tweet with times:');
    console.log(tweet);
}

module.exports = {
    postTheTweet: postTheTweet
}