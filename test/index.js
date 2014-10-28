var alApi = require('../'),
    expect = require('expect.js'),
    async = require('async'),
    nock = require('nock');

describe('al-papi', function() {
  it('gives unauthorized if so', function(done) {
    alApi.AlConfig('wrong');
    // Make request object to make api calls
    var req = new alApi.AlRequest();
    req.post({'keyword' : 'Centaur Soirée'}, expectations);

    function expectations(response) {
      expect(response.success).to.be(false);
      expect(response.errorMessage).to.be('Unauthorized');
      expect(response.statusCode).to.be(401);
      done();
    }
  });

  describe('when properly authed', function() {
    alApi.AlConfig(process.env.API_KEY);
    // Make request object to make api calls
    var req = new alApi.AlRequest();

    it('gives gives success if auth ok', function(done) {
      req.post({'keyword' : 'Centaur Soirée'}, expectations);

      function expectations(response) {
        expect(response.success).to.be(true);
        expect(response.statusCode).to.be(200);
        done();
      }
    });
    it('can have two async requests going', function(done) {
      async.times(2, function(n, next) {
        req.post({'keyword' : 'Centaur Soirée'}, function(result) {
          if (result.success) {
            next();
          } else {
            next(new Error(result.errorMessage));
          }
        });
      }, done);
    });

    it('gives success==false on non-200', function(done) {
      var ALEndpoint = nock("http://api.authoritylabs.com").
          filteringPath(function(path) {
            return '/matchany';
          }).
          post('/matchany').
          once().
          reply(404, 'Not Found');

      req.post({'keyword' : 'Centaur Soirée'}, function(result) {
        expect(result.success).to.be(false);
        ALEndpoint.done();
        done();
      });
    });
  });
});

// vim: set et sw=2 ts=2 colorcolumn=80:
