'use strict';

// This web app uses one json file to function. This module is responsible for getting and storing
// that data and sending it through whenever it's needed.

var _ = require('lodash');

// This URL may change. In which case, we're stuffed.
var JSON_URL = 'https://raw.githubusercontent.com/1vasari/songdown-songs/master/songs.json';

var data;

var handleCallback = function(cb, data, scope) {
  data = data;
  cb.call(scope, data);
};

var getData = function(cb, scope) {

  scope = scope || window;

  // Don't make calls if we already have data.
  if (data) {
    handleCallback(cb, data, scope);
  }

  var httpRequest = typeof XMLHttpRequest !== 'undefined' ? new XMLHttpRequest()
    : new window.ActiveXObject('Microsoft.XMLHTTP');

  httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === 4 && httpRequest.status === 200) {
      handleCallback(cb, JSON.parse(httpRequest.responseText), scope);
    }
  };

  httpRequest.open('GET', JSON_URL, true);
  httpRequest.send();
};

module.exports = getData;