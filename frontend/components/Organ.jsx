var React = require('react');
var TONES = require('../constants/Tones');
var KEYMAP = require('../constants/Keymap');
var Key = require('./key');
var Recorder = require('./Recorder');

var Organ = React.createClass({
  render: function () {
    return (
    <div>
      <Key noteName={'C'} />
      <Key noteName={'D'} />
      <Key noteName={'E'} />
      <Key noteName={'F'} />
      <Key noteName={'G'} />
      <Key noteName={'A'} />
      <Key noteName={'B'} />
      <Key noteName={'C2'} />

      <br/><br/>
      <hr/>

    <Recorder/>

    </div>
    );
  }
});


module.exports = Organ;
