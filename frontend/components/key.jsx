var React = require('react');
var KeyStore = require('../stores/KeyStore');
var TONES = require('../constants/Tones');
var KEYMAP = require('../constants/Keymap');
var Note = require('../util/Note');

var Key = React.createClass({
  getInitialState: function () {
    return { pressedKeys: KeyStore.all(),
                    note: new Note(TONES[this.props.noteName]),
                    playing: false};
  },

  _keysChanged: function () {
    this.setState({pressedKeys: KeyStore.all()});
    this.setState({playing: this.playingNow()});
  },

  componentDidMount: function () {
    KeyStore.addListener(this._keysChanged);
  },

  componentWillUnmount: function () {
    KeyStore.removeListener(this._keysChanged);
  },

  playingNow: function () {
    if (this.state.pressedKeys.includes(KEYMAP[this.props.noteName])) {
      return true;
    } else {
      return false;
    }
  },

  render: function () {
    if (this.state.playing) {
      return <div className="playing">{ this.state.note.start() }</div>;
    } else {
      return <div className="not_playing">{ this.state.note.stop() }</div>;
    }
  }
});


module.exports = Key;
