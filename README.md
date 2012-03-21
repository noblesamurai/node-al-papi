npm install -g
npm link
node // for console

// Example So Far
var al = require('al-papi');
al.AlConfig('my-api-key');
var req = new al.AlRequest();
req.post('params', function(){ console.log('callback') } );
