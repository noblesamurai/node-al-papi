var Util = require('util');

var AlConfig = function(api_key, base_url) {
  base_url = base_url || "http://api.authoritylabs.com";
  global.al_config = { "api_key" : api_key, "base_url" : base_url };
};

module.exports = AlConfig;
