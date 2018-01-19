# itscatoclock

[![Build Status](https://travis-ci.org/lwojcik/itscatoclock.svg?branch=master)](https://travis-ci.org/lwojcik/itscatoclock)
[![Greenkeeper badge](https://badges.greenkeeper.io/lwojcik/itscatoclock.svg)](https://greenkeeper.io/)
[![NSP Status](https://nodesecurity.io/orgs/lwojcik/projects/79fc0b24-1685-4f79-8d51-ed10c473ccd5/badge)](https://nodesecurity.io/orgs/lwojcik/projects/79fc0b24-1685-4f79-8d51-ed10c473ccd5)
[![Known Vulnerabilities](https://snyk.io/test/github/lwojcik/itscatoclock/badge.svg?targetFile=package.json)](https://snyk.io/test/github/lwojcik/itscatoclock?targetFile=package.json)
[![Maintainability](https://api.codeclimate.com/v1/badges/270cc6a05c357f083a6d/maintainability)](https://codeclimate.com/github/lwojcik/itscatoclock/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/270cc6a05c357f083a6d/test_coverage)](https://codeclimate.com/github/lwojcik/itscatoclock/test_coverage)

The following is a script [running my Twitter bot, @itscatoclock](https://twitter.com/itscatoclock).

When executed, it chooses a random image from a pre-configured directory and tweets it together with current times in different cities. The image is added to the banlist which prevents the same images from being posted more than once.

## Prerequisites

* Node.js 8.9.3 LTS or newer.
* MongoDB database.
* Server with cron jobs support (Linux or Windows with Task Scheduler).
* Collection of images to choose from :-)

## Installation

* Login to the Twitter account you wish to run the script. Go to [Twitter Application Management](https://apps.twitter.com/) and create a new app.
* Note down the following credentials: consumer key, consumer secret, access token and access token secret.
* Clone the repository and install dependencies.

```
$ git clone git@github.com:lwojcik/itscatoclock.git
$ cd itscatoclock
$ npm install
```

* Copy your collection of images to `images/` subfolder inside the project directory.

* Rename the `.env.sample` file to `.env`. Provide the following data:
```
ICOC_MONGODB_DB_URL='mongodb://localhost:27017/itscatoclock' # MongoDB connection string
ICOC_IMAGE_PATH='/path/to/images/' # Path to the images folder
ICOC_TWITTER_USERNAME='itscatoclockdev' # Twitter username
ICOC_TWITTER_CONSUMER_KEY='XXXXXXXXXXXXXXXXXXXXXXXXXXXXX' # Twitter app consumer key
ICOC_TWITTER_CONSUMER_SECRET='XXXXXXXXXXXXXXXXXXXXXXXXXXXXX' # Twitter app consumer secret
ICOC_TWITTER_ACCESS_TOKEN='XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' # Twitter app access token
ICOC_TWITTER_ACCESS_TOKEN_SECRET='XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' # Twitter app access token secret
```

* Rename the `places.js.sample` to `places.js` and edit the list of cities. Use the [appropriate timezone identifiers](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). Flag emojis can be copied from [https://emojipedia.org/flags/](https://emojipedia.org/flags/). Example:

```javascript
const places = [
  {
    emoji: '🇵🇱',
    name: 'Warsaw',
    timezone: 'Europe/Warsaw',
  },
];

module.exports = places;
```

* Run `npm test` in the project folder to ensure the project is set up correctly.
* Run `crontab -e` and add a cron job to execute the script every full hour:
```
0 * * * * node /path/to/itscatoclock update.js
 ```
* Wait until the next full hour and check your Twitter account. :-)

## Things to improve someday

* ~~Convert callback hell to promises.~~
* Attribution mechanism.
* Replace MongoDB with [diskdb](https://www.npmjs.com/package/diskdb).
* Notifications about the success (or failure) of script execution. 
* Automatic banlist purge when all images get banned.


# Project page

[https://github.com/lwojcik/itscatoclock](https://github.com/lwojcik/itscatoclock)

# License

Licensed under [MIT license](https://raw.githubusercontent.com/lwojcik/itscatoclock/master/LICENSE). See [LICENSE](https://raw.githubusercontent.com/lwojcik/itscatoclock/master/LICENSE) for more info.
