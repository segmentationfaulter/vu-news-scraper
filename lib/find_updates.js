'use strict';

/**
 * findUpdates gets in the array of previous news ID's
 * and the array of latest news ID's
 * and return an array of ID's of updated news
 * @param {array} prevNews
 * @param {array} latestNews
 * @return {array} updates
 */

function findUpdates(prevNews, latestNews) {
  const updates = [];
  latestNews.forEach((news) => {
    if (prevNews.indexOf(news) === -1) {
      updates.push(news);
    }
  });
  return updates;
}

module.exports = findUpdates;
