'use strict';

/**
 * Gets in a uri extracted from VU's news page
 * and returns the news ID
 * this is a helper function
 * it is used in extractNewsIDs below
 * @param {string} uri
 * @return {string}
 */

function extractNewsID(uri) {
   const splitted = uri.split('=');
   return splitted.pop();
}

/**
 * Gets in an array of uri's extracted from VU's news page
 * and return an array of news ID's from them
 * @param {array} uris
 * @return {array} ids
 */

function extractNewsIDs (uris) {
  const ids = [];
  uris.forEach((uri) => {
    ids.push(extractNewsID(uri));
  });
  return ids;
}

module.exports = extractNewsIDs;
