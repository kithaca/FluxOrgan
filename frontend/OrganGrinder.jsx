window.Dispatcher = require("./dispatcher/Dispatcher");
window.Note = require("./util/Note");
window.KeyStore = require("./stores/KeyStore");
window.KeyListener = require("./util/KeyListener");
window.TrackStore = require("./stores/TrackStore");
var React = require('react');
var ReactDOM = require('react-dom');
var Key = require('./components/key');
var Organ = require('./components/Organ');


document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Organ/>, document.getElementById('content'));
});
