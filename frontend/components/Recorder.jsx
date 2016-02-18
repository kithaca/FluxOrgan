var React = require('react');
var KeyStore = require('../stores/KeyStore');
var TONES = require('../constants/Tones');
var KEYMAP = require('../constants/Keymap');
var Note = require('../util/Note');
var Track = require('../util/Track');
var TrackStore = require('../stores/TrackStore');

var Recorder = React.createClass({

  getInitialState: function () {
    return { isRecording: false, track: new Track({name: "untitled"})};
  },

  _keysChanged: function () {
    this.state.track.addNotes(KeyStore.all());

  },

  componentDidMount: function () {
    KeyStore.addListener(this._keysChanged);
  },

  componentWillUnmount: function () {
    KeyStore.removeListener(this._keysChanged);
  },

  render: function () {
    return(
      <div>
        <button onClick={this.state.track.startRecording.bind(this.state.track)}>
          Start Recording
        </button>

        <button onClick={this.state.track.stopRecording.bind(this.state.track)}>
          Stop Recording
        </button>

        <br/>

        <button onClick={this.state.track.play.bind(this.state.track)}>
          Play
        </button>

      </div>
    );
  }

});

module.exports = Recorder;
