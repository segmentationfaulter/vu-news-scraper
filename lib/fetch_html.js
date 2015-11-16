'use strict';
const http = require('http');

/**
 * fetchHTML fetches the html from the url provided asynchronously
 * @param {String} url
 * @param {Function} callback
 */

function fetchHTML(url, callback) {
  let html = '';
  http.get(url, (res)=> {
    res.on('readable', () => {
      let chunk = res.read();
      if (chunk !== null) {
          html += chunk;
      } else {
        callback(null, html);
      }
    });
    res.on('error', (error) => {
      callback(error);
    });
  }).on('error', (error) => {
    console.error('Error occured with request to VU news', error);
  });
}

module.exports = fetchHTML;
