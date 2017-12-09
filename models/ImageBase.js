const fs = require('fs');
const appConfig = require('../config/app');

const ImageBase = {
  determineNumberOfImages: (next) => {
    const imageFolder = appConfig.imagePath;

    fs.readdir(imageFolder, (err, files) => {
      next(files.length);
    });
  },

  getImage: (number, next) => {
    const imageFolder = appConfig.imagePath;

    fs.readdir(imageFolder, (err, files) => {
      next(files[number]);
    });
  }
}

module.exports = ImageBase;