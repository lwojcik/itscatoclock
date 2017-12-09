'use strict';

require('dotenv').config();

const moment = require('moment-timezone');

// config

const database = require('./config/database.js');
const app = require('./config/app.js');
const twitter = require('./config/twitter.js');

// api

const twitterApi = require('./api/twitter.js');

// models

const BanList = require('./models/BanList.js');
const ImageBase = require('./models/ImageBase.js');
const Places = require('./.places');

// logic

const determineNumberOfImages = (next) => {
  ImageBase.determineNumberOfImages(function(numberOfImages) {
    next(numberOfImages);
  });
}

const getRandomImageNumber = (numberOfImages, next) => {
  const low = 0;
  const high = numberOfImages;
  const selectedNumber =  Math.floor(Math.random() * (high - low + 1) + low);

  next(selectedNumber);
};

const getImageByNumber = (imageNumber, next) => {
  ImageBase.getImage(imageNumber, function(chosenImage) {
    next(chosenImage);
  });
};

const checkIfImageIsBanned = (image, next) => {
  BanList.isImageBanned(image, function(isItBanned) {
    next(isItBanned);
  });
};

const banImage = (image, next) => {
  BanList.addImage(image, function() {
    next();
  })
}

const constructTweet = () => {
  const places = Places;
  let tweetContent = '';
  
  places.forEach(function(place, id, array) {
    place.currentTime = moment().tz(place.timezone).format('HH:mm');

    tweetContent += place.emoji + ' ' + place.name + ': ' + place.currentTime;
    if (id !== array.length -1) tweetContent += '\n';
  });

  return tweetContent;
}

// main method

const startTheMagic = () => {
  determineNumberOfImages((numberOfImages) => {
    getRandomImageNumber(numberOfImages, (chosenImageNumber) => {
      getImageByNumber(chosenImageNumber, (image) => { 
        checkIfImageIsBanned(image, (image, isItBanned) => {
          if (isItBanned) {
            startTheMagic();
          } else {
            const tweetContent = constructTweet();
            const imagePath = app.imagePath + image;

            banImage(imagePath, () => {
              return;
            });

            twitterApi.postTweetWithMedia(imagePath, tweetContent, () => {
              process.exit();
            });
          }
        });
      });
    });
  });
};

startTheMagic();
