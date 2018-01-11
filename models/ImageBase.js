const fs = require('fs');
const { imagePath } = require('../config/app');

const ImageBase = {
  determineNumberOfImages: () => new Promise((resolve, reject) => {
    fs.readdir(imagePath, (err, files) => {
      if (err) throw reject(err);
      resolve(files.length);
    });
  }),

  getImage: number => new Promise((resolve, reject) => {
    fs.readdir(imagePath, (err, files) => {
      if (err) throw reject(err);
      resolve(files[number]);
    });
  }),
};

module.exports = ImageBase;
