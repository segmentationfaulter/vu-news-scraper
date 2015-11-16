'use strict';

function extractNewsID(uri) {
   const splitted = uri.split('=');
   return splitted.pop();
}

function extractNewsIDs (uris) {
  const ids = [];
  uris.forEach((uri) => {
    ids.push(extractNewsID(uri));
  });
  return ids;
}

module.exports = extractNewsIDs;
