'use strict';

var React = require('react');
var Radium = require('radium');

var Col = require('react-bootstrap/lib/Col');
var Grid = require('react-bootstrap/lib/Grid');
var Row = require('react-bootstrap/lib/Row');

require('babel/polyfill');

var ReactRouter = require('react-router');
var RouteHandler = ReactRouter.RouteHandler;
var Route = ReactRouter.Route;
var DefaultRoute = ReactRouter.DefaultRoute;
var NotFoundRoute = ReactRouter.NotFoundRoute;

var Edit = require('./components/edit');
var Header = require('./components/header');
var Home = require('./components/home');
var Song = require('./components/song');
var SongIndex = require('./components/songIndex');

var styles = require('./styles');

var App = Radium(React.createClass({
  render: function() {
    return (
      <div style={styles.app}>

        <Header />
        <Grid fluid>
          <Row>
            <Col sm={3} md={2} style={styles.sidebar}>
              <SongIndex />
            </Col>
            <Col sm={9} smOffset={3} md={10} mdOffset={2}>
              <RouteHandler />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}));

var NotFound = React.createClass({
  render: function() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>404 Not Found</h1>
        <img src="http://www.martinprint.com.au/blog/wp-content/uploads/2012/04/003.jpg"></img>
      </div>
    );
  }
});

var routes = (
  <Route handler={App}>
    <DefaultRoute handler={Home} />
    <NotFoundRoute handler={NotFound} />

    <Route name="editor" path="/edit" handler={Edit}>
      <Route name="editSong" path="/edit/:name" handler={Edit} />
    </Route>

    <Route name="song" path="/song/:name" handler={Song} />
  </Route>
);

window.onload = function() {
  ReactRouter.run(routes, ReactRouter.HistoryLocation, function(Root) {
    React.render(<Root />, document.body);
  });
};
