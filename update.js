'use strict';

require('dotenv').config();

const database = require('./config/database.js');
const app = require('./config/app.js');
const twitter = require('./config/twitter.js');

const twitterApi = require('./api/twitter.js');

const Twitter = require('twitter');

const banList = require('./models/BanList.js');

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
  //const randomCatPic = getRandomCatPic();
  //const tweetWithTimes = constructTweet();

  //twitterApi.postTheTweet(randomCatPic, tweetWithTimes);
  //console.log(twitter);

  banList.addImage('lol')
  banList.isImageBanned('lol');
  banList.purge();
};

startTheMagic();
