'use strict';

require('dotenv').config();

const Twitter = require('twitter');
const fs = require('fs');

// config

const database = require('./config/database.js');
const app = require('./config/app.js');
const twitter = require('./config/twitter.js');

// api

const twitterApi = require('./api/twitter.js');

// models

const banList = require('./models/BanList.js');
const places = require('./.places');

// logic

const getRandomCatPic = (next) => {

};

const constructTweet = () => {

}

// main method

const startTheMagic = () => {

};

startTheMagic();
