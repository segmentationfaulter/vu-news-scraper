'use strict';
const cheerio = require('cheerio');

function fetchNewsURIs(html) {
  const result = [];
  const $ = cheerio.load(html);
  $('#ucNews_gvNews').find('a').each(function() {
    result.push($(this).attr('href'));
  });
  return result;
}

module.exports = fetchNewsURIs;
