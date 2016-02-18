var AppDispatcher = require('../dispatcher/Dispatcher');


var KeyActions = {
  keyPressed: function (key) {
    AppDispatcher.dispatch({
      actionType: "ADD_KEY",
      key: key
    });
  },

  multipleKeysPressed: function (keys) {
    AppDispatcher.dispatch({
      actionType: "ADD_MULTIPLE_KEYS",
      keys: keys
    });
    // debugger;
  },

  keyUnpressed: function (key) {
    AppDispatcher.dispatch({
      actionType: "REMOVE_KEY",
      key: key
    });
  },

  resetKeys: function () {
    AppDispatcher.dispatch ({
      actionType: "RESET_KEYS"
    });
  }


};

module.exports = KeyActions;
