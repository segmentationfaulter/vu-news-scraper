'use strict';
const fetchHTML = require('./fetch_html');
const getNewsIDs = require('./extract_news_ids');
const findUpdates = require('./find_updates');
const url = require('./config').url;

function poll(callback) {
  fetchHTML(url, (err, html) => {
    if (err) {
      callback(err);
    }
    let prevNews = getNewsIDs(html);

    // poll the server repeatedly after given duration
    // and find if there are any updates
    setInterval(() => {
      fetchHTML(url, (err, html) => {
        if (err) {
          callback(err);
        }
        const latestNews = getNewsIDs(html);
        const updates = findUpdates(prevNews, latestNews);
        prevNews = latestNews;
        callback(null, updates);
      });
    }, 1000 * 30);
  });
}

module.exports = poll;
