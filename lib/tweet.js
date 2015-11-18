'use strict';
const twitterClient = require('./twitter_client');

/**
 * tweet function takes in an array of status messages to be tweeted and tweets them.
 * @param {array} updates
 */

function tweet(updates) {
  updates.forEach((update) => {
    twitterClient.post('statuses/update', {'status': update}, (error) => {
      if(error) throw error;
    });
  });
}

module.exports = tweet;
