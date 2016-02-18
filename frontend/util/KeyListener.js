var KeyActions = require('../actions/KeyAction');
var Keycodes = require('../constants/Keycodes');

var KeyListener = {
  keydown: $(document).on('keydown', function (e) {
    e.preventDefault();
    var code = Keycodes[e.keyCode];
    KeyActions.keyPressed(code);
  }),

  keyup: $(document).on('keyup', function (e) {
    e.preventDefault();
    var code = Keycodes[e.keyCode];
    KeyActions.keyUnpressed(code);
  })
};

module.exports = KeyListener;
