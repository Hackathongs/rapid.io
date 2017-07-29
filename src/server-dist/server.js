'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpack3 = require('../../webpack.config');

var _webpack4 = _interopRequireDefault(_webpack3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = 3000;

var compiler = (0, _webpack2.default)(_webpack4.default);
app.use(require('webpack-dev-middleware')(compiler, {
  path: _webpack4.default.output.path
}));
app.use(require('webpack-hot-middleware')(compiler));

// Render static index route
app.use(_express2.default.static(_path2.default.join(__dirname, '../client')));

app.listen(port, function () {
  console.log('server.js has been served on port: ' + port);
});