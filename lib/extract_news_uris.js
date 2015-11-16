'use strict';
const cheerio = require('cheerio');

/**
 * Extract news URI's from the html fetched from VU's news page
 * and returns in an array
 * @param {string} html
 * @return {array} result
 */
 
function extractNewsURIs(html) {
  const result = [];
  const $ = cheerio.load(html);
  $('#ucNews_gvNews').find('a').each(function() {
    result.push($(this).attr('href'));
  });
  return result;
}

module.exports = extractNewsURIs;
