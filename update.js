require('dotenv').config();

const moment = require('moment-timezone');

// config

const app = require('./config/app.js');

// api

const twitterApi = require('./api/twitter.js');

// models

const BanList = require('./models/BanList.js');
const ImageBase = require('./models/ImageBase.js');
const Places = require('./places');

// emojis

const TimeEmoji = require('./emoji/time.js');

// logic

const determineNumberOfImages = (next) => {
  ImageBase.determineNumberOfImages((numberOfImages) => {
    next(numberOfImages);
  });
};

const getRandomImageNumber = (numberOfImages, next) => {
  const low = 0;
  const high = numberOfImages;
  const selectedNumber = Math.floor((Math.random() * ((high - low) + 1)) + low);

  next(selectedNumber);
};

const getImageByNumber = (imageNumber, next) => {
  ImageBase.getImage(imageNumber, (chosenImage) => {
    next(chosenImage);
  });
};

const checkIfImageIsBanned = (image, next) => {
  BanList.isImageBanned(image, (isItBanned) => {
    next(isItBanned);
  });
};

const banImage = (image, next) => {
  BanList.addImage(image, () => {
    next();
  });
};

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

// main method

const startTheMagic = () => {
  determineNumberOfImages((numberOfImages) => {
    getRandomImageNumber(numberOfImages, (chosenImageNumber) => {
      getImageByNumber(chosenImageNumber, (chosenImage) => {
        checkIfImageIsBanned(chosenImage, (image, isItBanned) => {
          if (isItBanned) {
            startTheMagic();
          } else {
            const tweetContent = constructTweet();
            const imagePath = app.imagePath + image;

            twitterApi.postTweetWithMedia(imagePath, tweetContent, () => {
              process.exit();
            });

            banImage(imagePath, () => {});
          }
        });
      });
    });
  });
};

startTheMagic();
