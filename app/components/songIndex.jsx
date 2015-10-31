'use strict';

var React = require('react');
var Reflux = require('reflux');
var Router = require('react-router');
var _ = require('lodash');

var ListGroup = require('react-bootstrap/lib/ListGroup');
var ListGroupItem = require('react-bootstrap/lib/ListGroupItem');
var ListGroupItemLink = require('react-router-bootstrap').ListGroupItemLink;


var CollectionActions = require('./../actions/collection');

var CollectionStore = require('./../stores/collection');

var Collection = React.createClass({
  mixins: [
    Reflux.connect(CollectionStore, 'collection')
  ],

  componentDidMount: function() {
    document.title = 'Songs';
    CollectionActions.load();
  },

  render: function() {
    var arr = [];

    _.each(this.state.collection, function(song) {
      arr.push(
        <ListGroupItemLink key={song.name} to={'/song/' + song.name}>{song.name}</ListGroupItemLink>
      );
    });

    return <ListGroup>{arr}</ListGroup>;
  }
});

module.exports = Collection;
