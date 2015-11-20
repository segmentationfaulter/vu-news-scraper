'use strict';
const poll = require('./lib/poll');
const getTweetContents = require('./lib/create_tweet_contents');
const tweet = require('./lib/tweet');

poll((err, updates) => {
  if (err) throw err;
  if (updates.length !== 0) {
    getTweetContents(updates, (err, tweets) => {
      tweet(tweets);
      console.log('tweeted');
    });
  } else {
    console.log('No new updates');
  }
});
