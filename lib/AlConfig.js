var Util = require('util');

var AlConfig = function(_api_key, _base_url) {
  this.api_key     = _api_key;
  this.baseUrl     = _base_url || "http://api.authoritylabs.com";
  global.al_config = { "api_key" : _api_key, "base_url" : _base_url };
};

module.exports = AlConfig;
