'use strict';

require('dotenv').config();

const Twitter = require('twitter');

const database = require('./config/database.js');
const app = require('./config/app.js');
const twitter = require('./config/twitter.js');

const twitterApi = require('./api/twitter.js');

const banList = require('./models/BanList.js');

const places = require('./.places');

const getRandomCatPic = () => {

};

const constructTweet = () => {

}

const startTheMagic = () => {

};

startTheMagic();
