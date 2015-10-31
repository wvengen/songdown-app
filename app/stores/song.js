'use strict';

var Reflux = require('reflux');
var _ = require('lodash');

var getData = require('./../data');

var SongActions = require('./../actions/song');

var SongStore = Reflux.createStore({
  listenables: SongActions,

  getInitialState: function() {
    return {
      artist: '',
      name: '',
      source: ''
    };
  },

  init: function() {
    this.data = this.getInitialState();
  },

  onLoad: function(name) {
    getData(function(data) {
      if (data && data[name]) {
        this.data = data[name];
        this.trigger(data[name]);
      } else {
        window.location.pathname = '/404';
      }
    }, this);
  },

  onSetSource: function(value) {
    this.data.source = value;
    this.trigger(this.data);
  },

  onClear: function() {
    this.data = this.getInitialState();
    this.trigger(this.data);
  }

});

module.exports = SongStore;
