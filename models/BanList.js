const mongoose = require('mongoose');

const Image = require('./Image');

const BanList = {

  /**
   * Adds the image to the banlist
   * @param  {String} imageName
   * @return {Boolean} true if image was added, false if not
   */
  addImage: function(imageName) {
    console.log('adding ' + imageName + ' to the banlist');
  },

  /**
   * Check if image is in the banlist
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