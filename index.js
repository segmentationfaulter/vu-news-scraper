'use strict';
const fetchHTML = require('./lib/fetch_html');
const getNewsURIs = require('./lib/extract_news_uris');
const getNewsIDs = require('./lib/extract_news_ids');
const url = require('./lib/config').url;

fetchHTML(url, (err, html) => {
  if (err) throw err;
  var ids = getNewsIDs(getNewsURIs(html));
  console.log(ids);
});
