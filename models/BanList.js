const mongoose = require('mongoose');
const database = require('../config/database');

mongoose.connect(database.url, { useMongoClient: true });
mongoose.Promise = global.Promise;

const Image = require('./Image');

const BanList = {

  /**
   * Adds the image to the banlist
   * @param  {String} imageName
   * @param  {Function} callback
   * @return {Boolean} true if image was added, false if not
   */
  addImage: (imageName, next) => {
    const imageQuery = { name: imageName };

    Image.findOne(imageQuery, (err, image) => {
      if (err) throw err;

      if (image === null) {
        Image.create(imageQuery, (imageCreationErr) => {
          if (imageCreationErr) throw imageCreationErr;
          next();
        });
      } else {
        next();
      }
    });
  },

  /**
   * Checks if image is in the banlist
   * @param  {String} imageName
   * @return {Boolean} true if image is banned, false if not
   */
  isImageBanned: (imageName, next) => {
    const imageQuery = { name: imageName };
    Image.findOne(imageQuery, (err, image) => {
      if (err) throw err;
      let isItBanned = false;

      if (image) {
        isItBanned = true;
      }

      next(imageName, isItBanned);
    });
  },

  /**
   * Purges all items from the banlist
   */
  purge: (next) => {
    Image.remove({}, () => {
      next();
    });
  },
};

module.exports = BanList;
