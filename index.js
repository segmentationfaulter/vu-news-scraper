'use strict';
const poll = require('./lib/poll');

poll((err, updates) => {
  if (err) throw err;
  if (updates.length === 0) {
    console.log('No updates');
  } else {
    console.log(updates);
  }
});
