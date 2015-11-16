'use strict';
const fetchHTML = require('./lib/fetch_html');
const getNewsIDs = require('./lib/extract_news_ids');
const url = require('./lib/config').url;

fetchHTML(url, (err, html) => {
  if (err) throw err;
  var ids = getNewsIDs(html);
  console.log(ids);
});
