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
  console.log("POST " + this.api_key);
  this._do_post(params, callback);
};

module.exports = AlRequest;
