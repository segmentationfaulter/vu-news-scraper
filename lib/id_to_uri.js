'use strict';
const config = require('./config');

/**
 * idsArray takes an array of news ID's as argument
 * and return an array of URI's corresponding to their IDs
 * @param {array} idsArray
 * @return {array}
 */

function idsToUris(idsArray) {
  if (idsArray.lenght === 0) {
    return idsArray;
  }
  return idsArray.map((id) => {
    return config.prefix + id;
  });
}
