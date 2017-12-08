'use strict'

const env = process.env;

const app = {};

app.imagePath = env.ICOC_IMAGE_PATH;
app.cachedNumberOfImages = env.ICOC_HOW_MANY_IMAGES_FILE;

module.exports = app;
