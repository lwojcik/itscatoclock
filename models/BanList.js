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
  addImage: function(imageName, callback) {
    const imageQuery = { name: imageName };

    Image.findOne(imageQuery, function(err, image) {
      if (err) throw err;

      if (image === null) {
        Image.create(imageQuery, function(err) {
          if (err) throw err;
          callback();
        });
      } else {
        callback();
      }
    });
  },

  /**
   * Checks if image is in the banlist
   * @param  {String} imageName
   * @return {Boolean} true if image is banned, false if not
   */
  isImageBanned: function(imageName) {
    console.log('checking if ' + imageName + ' is in the banlist');
  },

  /**
   * Purges all items from the banlist
   */
  purge: function() {
    console.log('purging the banlist');
  }
};

module.exports = BanList;