'use strict';

const twitterApi = require('./api/twitter.js');

const getRandomCatPic = () => {
  // randomImage
  // check if the image is in the banlist
  // if yes, select another
  // if not, return it

  return 'getRandomCatPic';
};

const constructTweet = () => {
  // get a list of places to figure out the time

  // for place in places
  // place.name + place.time

  // return string to tweet

  return 'tweetWithTimes';
}

const startTheMagic = () => {
  const randomCatPic = getRandomCatPic();
  const tweetWithTimes = constructTweet();

  twitterApi.postTheKitteh(randomCatPic, tweetWithTimes);
};

startTheMagic();