'use strict';

var React = require('react');
var Radium = require('radium');
var Reflux = require('reflux');
var Router = require('react-router');
var _ = require('lodash');

var Nav = require('react-bootstrap/lib/Nav');
var Navbar = require('react-bootstrap/lib/Navbar');
var NavBrand = require('react-bootstrap/lib/NavBrand');
var NavItemLink = require('react-router-bootstrap').NavItemLink;

var styles = require('./../styles');

var SongStore = require('./../stores/song');

var Header = React.createClass({
  mixins: [
    Reflux.connect(SongStore, 'song')
  ],

  render: function() {

    var editHref = '/edit';
    if (this.state.song.name) {
      editHref = '/edit/' + this.state.song.name;
    }

    return (
      <Navbar inverse fixedTop style={styles.header} fluid>
        <NavBrand><Router.Link to="/">Songdown+</Router.Link></NavBrand>
        <Nav navbar right>
          <NavItemLink to='/'>Home</NavItemLink>
          <NavItemLink to={editHref}>Edit</NavItemLink>
        </Nav>
      </Navbar>
    );
  }
});

module.exports = Radium(Header);
