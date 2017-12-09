const fs = require('fs');
const appConfig = require('../config/app');

const ImageBase = {
  determineNumberOfImages: (next) => {
    const imageFolder = appConfig.imagePath;

    fs.readdir(imageFolder, (err, files) => {
      if (err) throw err;
      next(files.length);
    });
  },

  getImage: (number, next) => {
    const imageFolder = appConfig.imagePath;

    fs.readdir(imageFolder, (err, files) => {
      if (err) throw err;
      next(files[number]);
    });
  }
}

module.exports = ImageBase;