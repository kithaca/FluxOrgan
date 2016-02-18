var KeyStore = require('../stores/KeyStore');
var REVERSE_KEYMAP = require('../constants/ReverseKeymap');
var KeyAction = require('../actions/KeyAction');
var TrackAction = require('../actions/TrackAction');

var Track = function (attr) {
  this.name = attr.name;
  this.roll = attr.roll ? attr.roll : [];
  this.startTime = 0;
  this.interval;
};

Track.prototype.startRecording = function () {
  console.log("started recording");
  console.log(this);
  this.roll = [];
  this.startTime = Date.now();
};

Track.prototype.addNotes = function (notesArray) {
  var timeSlice = Date.now() - this.startTime;
  // var notes = KeyStore.all().map(function (k) {
  //   return REVERSE_KEYMAP[k];
  // });

  this.roll.push({timeSlice: timeSlice, notes: notesArray});
};

Track.prototype.stopRecording = function () {
  this.addNotes([]);
  TrackAction.onSave(this);
  debugger;
};

Track.prototype.play = function () {
  if (this.interval) {
    return;
  }

  var currentNote = 0;
  var playbackStartTime = Date.now();

  var track = this;

  this.interval = setInterval(function () {
    // debugger;
    if (currentNote < track.roll.length) {
      KeyAction.multipleKeysPressed(track.roll[currentNote].notes);

      if (Date.now() - playbackStartTime > track.roll[currentNote].timeSlice) {
        // debugger;
        KeyAction.resetKeys();
        currentNote++;
      }
    } else {
      clearInterval(track.interval);
      track.interval = undefined;
    }
  }, 10);

};

module.exports = Track;
