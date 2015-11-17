'use strict';
const cheerio = require('cheerio');
const fetchUpdatesHTML = require('./fetch_updates_html');
const config = require('./config');

/**
 * getTweetContents gets the contents of the tweets to be made
 * against the updates. It takes in an array of new news IDs and a callbak which
 * in turn collects the contens of the tweets
 * @param {array} updates
 * @param {function} callbak
 */

function getTweetContents (updates, callback) {
  fetchUpdatesHTML(updates, (err, results) => {
    if (err) {
      callback(err);
    }
    const tweets = [];  // to store what is going to be tweeted
    let counter = 0;
    results.forEach((html) => {
      let $ = cheerio.load(html);
      let title = $('title').text().trim().replace(/\r?\n|\r/gm, '');
      let newsID = updates[counter];
      tweets.push(title + ' ' + config.prefix + newsID);
      counter++;
    });
    callback(null, tweets);
  });
}

/**
The code below is here for testing purpose

getTweetContents(['2419', '2420'], (err, tweets) => {
  if (err) throw err;
  console.log(tweets);
});
*/

module.exports = getTweetContents;
