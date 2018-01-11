const { env } = process;

const app = {};

app.imagePath = env.ICOC_IMAGE_PATH;

module.exports = app;
