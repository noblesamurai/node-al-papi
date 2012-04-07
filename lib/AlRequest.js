var Util   = require('util');
var AlHttp = require('./AlHttp');

var AlRequest = function(_api_key) {
  this.api_key = _api_key;
  global.al_config.api_key = _api_key;
  AlHttp.call(this);
}

var AlRequest = function() {
  this.api_key = global.al_config.api_key;
  AlHttp.call(this);
}

Util.inherits(AlRequest, AlHttp);

AlRequest.prototype.post = function(params, callback) {
  if (params === undefined) { params = {}; }
  this._do_post(params, callback);
};

AlRequest.prototype.priority_post = function(params, callback) {
  if (params === undefined) { params = {}; }
  params['priority'] = true;
  this._do_post(params, callback);
};

AlRequest.prototype.get = function(params, callback) {
  if (params === undefined) { params = {}; }
  this._do_get(params, callback);
};

module.exports = AlRequest;
