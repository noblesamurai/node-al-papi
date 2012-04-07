Node.js AuthorityLabs Partner API Package
=========================================

A wrapper around the Partner API calls. Allows post, priority post and get calls.

* Github: http://github.com/mtchavez/node-al-papi

## Install

    npm install al-papi

## Usage

Make a request object using your api key:
    
    // Require al-papi
    var al = require('al-papi');
    
    // Configure using your api-key
    al.AlConfig('yRR2tB39jStovMy6y6xP');
    
    // Make request object to make api calls
    var req = new al.AlRequest();

### POST

Post your keyword-engine-locale combination to the API:

    req.post({'keyword' : 'Centaur Soirée'}, function(response) {

      console.log(response.statusCode);
      console.log(response.url);
      console.log(response.params);
      
      if (response.success) {
        console.log(response.body);
      }
      else {
        console.log(response.errorMessage);
      }
    });

### Priority POST

Post your keyword to the priority queue if you need results in a more timely manner:

    req.priority_post({'keyword' : 'Centaur Soirée'}, function(response) {

      console.log(response.statusCode);
      console.log(response.url);
      console.log(response.params);
      
      if (response.success) {
        console.log(response.body);
      }
      else {
        console.log(response.errorMessage);
      }
    });

### GET

When you are ready to get your results you can do a GET request for your keyword-engine-locale combo:

    req.get({'keyword' : 'Centaur Soirée'}, function(response) {

      console.log(response.statusCode);
      console.log(response.url);
      console.log(response.params);
      
      if (response.success) {
        console.log(response.body);
      }
      else {
        console.log(response.errorMessage);
      }
    });

### Response

When making an API request a response object is returned with any errors, http response code and http reponse body.

    req.get({'keyword' : 'Centaur Soirée'}, function(response) {

      console.log(response.statusCode); // Status code of response
      console.log(response.url);        // The URL used for your request
      console.log(response.params);     // Original params given
      
      // success is a true/false of if the request received a 200 response code
      if (response.success) {
        // Body will be the parsed JSON response
        console.log(response.body);
      }
      else {
        // Error message if one exists
        console.log(response.errorMessage);
      }
    });
    
## License

Written by Chavez

Released under the MIT License: http://www.opensource.org/licenses/mit-license.php
