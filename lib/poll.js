'use strict';
const fetchHTML = require('./fetch_html');
const getNewsIDs = require('./extract_news_ids');
const findUpdates = require('./find_updates');
const config = require('./config');

/**
 * polls the server repeatedly to fetch any updates if available
 * updates are passed in callback as an array of new news IDs
 * @param {function} callback
 */

function poll(callback) {
  fetchHTML(config.url, (err, html) => {
    if (err) {
      callback(err);
    }
    let prevNews = getNewsIDs(html);

    // poll the server repeatedly after given duration
    // and find if there are any updates
    setInterval(() => {
      fetchHTML(config.url, (err, html) => {
        if (err) {
          callback(err);
        }
        const latestNews = getNewsIDs(html);
        const updates = findUpdates(prevNews, latestNews);
        prevNews = latestNews;
        callback(null, updates);
      });
    }, 1000 * 60 * config.pollInterval);
  });
}

module.exports = poll;
