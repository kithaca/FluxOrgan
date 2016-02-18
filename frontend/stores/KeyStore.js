var Store = require("flux/utils").Store;
var AppDispatcher = require('../dispatcher/Dispatcher.js');

var KeyStore = new Store(AppDispatcher);


var _keys = [];

KeyStore.all = function () {
  return _keys.slice();
};

KeyStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case "ADD_KEY":
      addKey(payload.key);
      KeyStore.__emitChange();
      break;

    case "REMOVE_KEY":
      removeKey(payload.key);
      KeyStore.__emitChange();
      break;

    case "ADD_MULTIPLE_KEYS":
      addMultipleKeys(payload.keys);
      KeyStore.__emitChange();
      break;

    case "RESET_KEYS":
      resetKeys();
      KeyStore.__emitChange();
      break;

  }
};

function addKey(key) {
  if (!_keys.includes(key)) {
    _keys.push(key);
  }
}

function resetKeys() {
  _keys = [];
}

function addMultipleKeys(keys) {
  _keys = _keys.concat(keys);
}

function removeKey(key) {
  var keyIdx;
  _keys.forEach(function(k, idx) {
    if (k === key) {
      keyIdx = idx;
    }
  });
  if (typeof keyIdx !== 'undefined') {
    _keys.splice(keyIdx, 1);
  }
}

module.exports = KeyStore;
