var Store = require("flux/utils").Store;
var AppDispatcher = require('../dispatcher/Dispatcher.js');

var TrackStore = new Store(AppDispatcher);

var _tracks = [];

TrackStore.all = function () {
  return _tracks.slice();
};

TrackStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case "ADD_TRACK":
      addTrack(payload.track);
      TrackStore.__emitChange();
      break;
  }
};

function addTrack(track) {
  _tracks.push(track);
}

module.exports = TrackStore;
