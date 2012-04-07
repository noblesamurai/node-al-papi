npm install -g
npm link
node // for console

    // Example So Far
    var al = require('al-papi');
    al.AlConfig('yRRBtB99jSIovMy6y6K0');
    var req = new al.AlRequest();
    req.post({'keyword' : 'Centaur Carnage'}, function(response) {

      console.log('Code:');
      console.log(response.statusCode);
      console.log('URL:');
      console.log(response.url);
      console.log('Params:');
      console.log(response.params);
      
      if (response.success) {
        console.log('Body:');
        console.log(response.body);
      }
      else {
        console.log('Error:');
        console.log(response.errorMessage);
      }
    });
    
    req.priority_post({'keyword' : 'Centaur Soirée'}, function(response) {

      console.log('Code:');
      console.log(response.statusCode);
      console.log('URL:');
      console.log(response.url);
      console.log('Params:');
      console.log(response.params);
      
      if (response.success) {
        console.log('Body:');
        console.log(response.body);
      }
      else {
        console.log('Error:');
        console.log(response.errorMessage);
      }
    });
    
    req.get({'keyword' : 'Centaur Carnage'}, function(response) {

      console.log('Code:');
      console.log(response.statusCode);
      console.log('URL:');
      console.log(response.url);
      console.log('Params:');
      console.log(response.params);
      
      if (response.success) {
        console.log('Body:');
        console.log(response.body);
      }
      else {
        console.log('Error:');
        console.log(response.errorMessage);
      }
    });
    