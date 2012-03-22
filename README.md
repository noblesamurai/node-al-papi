npm install -g
npm link
node // for console

    // Example So Far
    var al = require('al-papi');
    al.AlConfig('yRRBtB99jSIovMy6y6K0');
    var req = new al.AlRequest();
    result = req.post({'keyword' : 'Centaur Carnage'}, function(error, result) {
      if (error)
        console.log('Error: ' + (error.code ? error.code + ' ' + error.message : error.message));

      if (result)
        return result;
    });
    console.log('finished');
    console.log(JSON.parse(result.data));
    