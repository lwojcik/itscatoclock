const mongoose = require('mongoose');

const Image = require('./Image');

const BanList = {

  /**
   * Adds the image to the banlist
   * @param  {String} imageName
   * @param  {Function} callback
   * @return {Boolean} true if image was added, false if not
   */
  addImage: imageName => new Promise((resolve, reject) => {
    Image.findOne({ name: imageName })
      .then((image) => {
        if (image === null) {
          Image.create({ name: imageName }).then(() => resolve()).catch(error => reject(error));
        }
      })
      .catch(error => reject(error));
  }),

  /**
   * Checks if image is in the banlist
   * @param  {String} imageName
   * @return {Boolean} true if image is banned, false if not
   */
  isImageBanned: imageName => new Promise((resolve, reject) => {
    Image.findOne({ name: imageName })
      .then((image) => {
        let isItBanned = false;
        if (image) {
          isItBanned = true;
        }
        resolve({ isItBanned, imageName });
      })
      .catch(error => reject(error));
  }),

  /**
   * Purges all items from the banlist
   */
  purge: () => new Promise((resolve, reject) => {
    Image.remove({})
      .then(() => resolve())
      .catch(error => reject(error));
  }),
};

module.exports = BanList;
