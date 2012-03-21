var AlConfig = require('./AlConfig');

var AlRequest = function(_api_key) {
  this.api_key = _api_key;
  global.al_config.api_key = _api_key;
}

var AlRequest = function() {
  this.api_key = global.al_config.api_key;
}

AlRequest.prototype.post = function(parameters, callback) {
  console.log("POST " + this.api_key);
};

module.exports = AlRequest;
