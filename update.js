require('dotenv').config();

const moment = require('moment-timezone');

// config

const app = require('./config/app.js');

// api

const twitterApi = require('./api/twitter.js');

// database

const mongoose = require('mongoose');
const database = require('./config/database');

mongoose.connect(database.url).then(
  () => {},
  (err) => { console.log(err); },
);
mongoose.Promise = global.Promise;

// models

const BanList = require('./models/BanList.js');
const ImageBase = require('./models/ImageBase.js');
const Places = require('./places');

// emojis

const TimeEmoji = require('./emoji/time.js');

// logic

const determineNumberOfImages = () => new Promise((resolve, reject) => {
  ImageBase.determineNumberOfImages()
    .then(numberOfImages => resolve(numberOfImages))
    .catch(error => reject(error));
});

const getRandomNumber = numberOfImages => Math.floor(Math.random() * (numberOfImages + 1));

const getImageByNumber = imageNumber => new Promise((resolve, reject) => {
  ImageBase.getImage(imageNumber)
    .then(chosenImage => resolve(chosenImage))
    .catch(error => reject(error));
});

const checkIfImageIsBanned = image => new Promise((resolve, reject) => {
  BanList.isImageBanned(image)
    .then((isItBanned, checkedImage) => resolve(isItBanned, checkedImage))
    .catch(error => reject(error));
});

const banImage = image => new Promise((resolve, reject) => {
  BanList.addImage(image)
    .then(() => resolve())
    .catch(error => reject(error));
});

const constructTweet = () => {
  const places = Places;
  let tweetContent = '';

  places.forEach((place, id, array) => {
    const currentPlace = place;
    const currentHour = moment().tz(place.timezone).format('h');
    currentPlace.currentTimeEmoji = TimeEmoji[`h${currentHour}`];
    currentPlace.currentTime = moment().tz(place.timezone).format('HH:mm');

    tweetContent += `${currentPlace.currentTimeEmoji} ${currentPlace.emoji} ${currentPlace.name}: ${currentPlace.currentTime} `;

    if (id !== array.length - 1) tweetContent += '\n';
  });

  return tweetContent;
};

const publishTweet = (imagePath, tweetContent) => new Promise((resolve, reject) => {
  twitterApi.postTweetWithMedia(imagePath, tweetContent)
    .then(() => resolve())
    .catch(error => reject(error));

  banImage(imagePath);
});

// main method

const startTheMagic = () => {
  determineNumberOfImages()
    .then(numberOfImages => getRandomNumber(numberOfImages))
    .then(chosenImageNumber => getImageByNumber(chosenImageNumber))
    .then(chosenImage => checkIfImageIsBanned(chosenImage))
    .then((imageObject) => {
      if (imageObject.isItBanned) {
        startTheMagic();
      } else {
        const tweetContent = constructTweet();
        const imagePath = `${app.imagePath}${imageObject.imageName}`;
        publishTweet(imagePath, tweetContent)
          .then(() => process.exit())
          .catch(error => { throw new Error(error); });
      }
    })
    .catch(error => { throw new Error(error); });
};

startTheMagic();
