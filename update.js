'use strict';

require('dotenv').config()

const database = require('./config/database.js');
const app = require('./config/app.js');
const twitter = require('./config/twitter.js');

const getRandomCatPic = () => {
  // randomImage
  // check if the image is in the banlist
  // if yes, select another
  // if not, return it
};

const constructTweet = () => {
  // get a list of places to figure out the time

  // for place in places
  // place.name + place.time

  // return string to tweet
}

const startTheMagic = () => {
  //const randomCatPic = getRandomCatPic();
  //const tweetWithTimes = constructTweet();

  //twitterApi.postTheKitteh(randomCatPic, tweetWithTimes);
};

startTheMagic();
