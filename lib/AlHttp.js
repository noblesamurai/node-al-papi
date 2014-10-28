var Util        = require('util');
var request     = require('request');
var QueryString = require('querystring');
var Util        = require('util');
var AlResponse  = require('./AlResponse');
var http        = require('http');

var AlHttp = function() {
  /** @private */
  this.baseUrl      = global.al_config.base_url;
  this.api_key      = global.al_config.api_key;
  this._connections = {};
}

AlHttp.prototype._do_post = function(params, relativePath, callback) {
  _do_request.call(this, 'POST', params, relativePath, callback);
}

AlHttp.prototype._do_get = function(params, relativePath, callback) {
  _do_request.call(this, 'GET', params, relativePath, callback);
}

function _do_request(method, params, relativePath, callback) {
  params['auth_token'] = this.api_key;

  var queryParams = QueryString.stringify(params);
  var apiUrl      = this.baseUrl + relativePath;

  if (queryParams != undefined && queryParams.length > 0)
      apiUrl += '?' + queryParams;

  var requestOptions = { method: method, url: apiUrl };
  var alResponse     = new AlResponse(params, apiUrl);

  request(requestOptions, function(error, response, body) {
    if (error) {
      alResponse.errorMessage = error.message;
      alResponse.success = false;
      return callback(alResponse);
    }

    if ((alResponse.statusCode = response.statusCode) !== 200) {
      alResponse.errorMessage = http.STATUS_CODES[response.statusCode];
      alResponse.success = false;
    } else {
      try {
        alResponse.body = JSON.parse(body);
        alResponse.success = true;
      } catch (e) {
        alResponse.errorMessage = e.message;
        alResponse.success = false;
      }
    }

    callback(alResponse);
  });
}

module.exports = AlHttp
