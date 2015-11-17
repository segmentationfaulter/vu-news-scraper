'use strict';
const async = require('async');
const fetchHTML = require('./fetch_html');
const idsToUris = require('./id_to_uri');

/**
 * fetchUpdatesHTML fetches the html for updates if any asynchronously
 * html for updates is fetched so that we could get the title of updates
 * fetchUpdatesHTML takes array of updates ID's as one of the arguments
 * the other argument is the callback
 * callback has error as its first argument
 * second argument to callback is the array of html strings corresponding to each update
 * @param {array} updates
 * @param {function} callback
 */

function fetchUpdatesHTML(updates, callback) {
  const uris = idsToUris(updates);
  async.map(uris, fetchHTML, (err, results) => {
    if (err) {
      callback(err);
    }
    callback(null, results);
  });
}

module.exports = fetchUpdatesHTML;
