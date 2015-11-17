'use strict';
const cheerio = require('cheerio');

/**
 * Extract news URI's from the html fetched from VU's news page
 * and returns an array of URI's extracted
 * this is a helper function
 * which is used by extractNewsIDs below
 * @param {string} html
 * @return {array} result
 * @private
 */

function extractNewsURIs(html) {
  const result = [];
  const $ = cheerio.load(html);
  $('#ucNews_gvNews').find('a').each(function() {
    result.push($(this).attr('href'));
  });
  return result;
}

/**
 * Gets in a uri extracted from VU's news page
 * and returns the news ID
 * this is a helper function
 * it is used in extractNewsIDs below
 * @param {string} uri
 * @return {string}
 * @private
 */

function extractNewsID(uri) {
   const splitted = uri.split('=');
   return splitted.pop();
}

/**
 * Gets in html from VU's news page
 * and return an array of news ID's
 * @param {string} html
 * @return {array} ids
 */

function extractNewsIDs (html) {
  const ids = [];
  const uris = extractNewsURIs(html);
  uris.forEach((uri) => {
    ids.push(extractNewsID(uri));
  });
  return ids;
}

module.exports = extractNewsIDs;
