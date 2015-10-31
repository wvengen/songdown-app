'use strict';

var React = require('react');

var SongActions = require('./../actions/song');

var Index = React.createClass({

  componentDidMount: function() {
    // Ensure we clear out any song data now that we're on the index page.
    SongActions.clear();
  },

  render: function() {
    return (
      <p>Please select a song on the left.</p>
    );
  }
});

module.exports = Index;
