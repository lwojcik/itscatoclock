'use strict'

const env = process.env;

const database = {};

database.url = env.ICOC_MONGODB_DB_URL;

module.exports = database;
