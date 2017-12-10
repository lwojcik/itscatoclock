# itscatoclock

The following is a script [running my Twitter bot, @itscatoclock](https://twitter.com/itscatoclock).

When executed, it chooses a random image from a pre-configured directory and tweets it together with current times in different cities. The image is added to the banlist which prevents the same images from being posted more than once.

## Prerequisites

1. Node.js 8.9.3 LTS or newer.
2. MongoDB database.
3. Server with cron jobs support (Linux or Windows with Task Scheduler).
4. Collection of images to choose from :-)

## Installation

1. Login to the Twitter account you wish to run the script. Go to [Twitter Application Management](https://apps.twitter.com/) and create a new app.
2. Note down the following credentials: consumer key, consumer secret, access token and access token secret.
3. Clone the repository and install dependencies.

```
$ git clone git@bitbucket.org:lwojcik/itscatoclock.git
$ cd itscatoclock
$ npm install
```

4. Rename the `.env.sample` file to `.env`. Provide the following data:
```
ICOC_MONGODB_DB_URL='mongodb://localhost:27017/itscatoclock' # MongoDB connection string
ICOC_IMAGE_PATH='/path/to/images/' # Path to the images folder
ICOC_TWITTER_USERNAME='itscatoclockdev' # Twitter username
ICOC_TWITTER_CONSUMER_KEY='XXXXXXXXXXXXXXXXXXXXXXXXXXXXX' # Twitter app consumer key
ICOC_TWITTER_CONSUMER_SECRET='XXXXXXXXXXXXXXXXXXXXXXXXXXXXX' # Twitter app consumer secret
ICOC_TWITTER_ACCESS_TOKEN='XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' # Twitter app access token
ICOC_TWITTER_ACCESS_TOKEN_SECRET='XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' # Twitter app access token secret
```

5. Rename the `places.js.sample` to `places.js` and edit the list of cities. Use the [appropriate timezone identifiers](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). Flag emojis can be copied from [https://emojipedia.org/flags/](https://emojipedia.org/flags/). Example:

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

6. Run `npm test` in the project folder to ensure the project is set up correctly.
7. Run `crontab -e` and add a cron job to execute the script every full hour:
```
0 * * * * cd /home/lwoo/itscatoclock; node update.js
 ```
8. Wait until the next full hour and check your Twitter account. :-)

## Things to improve someday

1. Notifications about the success (or failure) of script execution. 
2. Automatic banlist purge when all images get banned.


# Project page

[https://bitbucket.org/lwojcik/itscatoclock](https://bitbucket.org/lwojcik/itscatoclock)

# License

Licensed under [MIT license](https://bitbucket.org/lwojcik/itscatoclock/raw/HEAD/LICENSE). See [LICENSE](https://bitbucket.org/lwojcik/itscatoclock/raw/HEAD/LICENSE) for more info.