'use strict';

var React = require('react');
var Reflux = require('reflux');
var Radium = require('radium');

var FontSizeActions = require('./../actions/fontSize');
var TransposeActions = require('./../actions/transpose');
var VideoActions = require('./../actions/video');

var VideoStore = require('./../stores/video');

var styles = require('./../styles');

var Toolbox = React.createClass({

  mixins: [
    Reflux.connect(VideoStore, 'showVideo')
  ],

  toggleVideo: function(e) {
    e.preventDefault();
    VideoActions.toggle();
  },

  render: function() {
    return (
      <div style={styles.toolbox}>
        <p>
          Transpose <button type="button" onClick={TransposeActions.transposeUp}>+</button>
          <button type="button" onClick={TransposeActions.transposeDown}>-</button>
          <br />
          Font Size <button type="button" onClick={FontSizeActions.increase}>+</button>
          <button type="button" onClick={FontSizeActions.decrease}>-</button>
        </p>

        <p>
          Show Video <input
            type="checkbox"
            checked={this.state.showVideo}
            onChange={this.toggleVideo}
          ></input>
          <br />
          Show Chords <input type="checkbox" disabled={true}></input>
          <br />
          Show GOTOs <input type="checkbox" disabled={true}></input>
        </p>
      </div>
    );
  }
});

module.exports = Radium(Toolbox);
