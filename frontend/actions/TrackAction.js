var AppDispatcher = require('../dispatcher/Dispatcher');


var TrackAction = {
  onSave: function (track) {
    AppDispatcher.dispatch({
      actionType: "ADD_TRACK",
      track: track
    });
  },

};

module.exports = TrackAction;
