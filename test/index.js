var alApi = require('../'),
    expect = require('expect.js');
describe('the library', function() {
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

  it('gives gives success if auth ok', function(done) {
    alApi.AlConfig(process.env.API_KEY);
    // Make request object to make api calls
    var req = new alApi.AlRequest();
    req.post({'keyword' : 'Centaur Soirée'}, expectations);

    function expectations(response) {
      expect(response.success).to.be(true);
      expect(response.statusCode).to.be(200);
      done();
    }
  });
});

// vim: set et sw=2 ts=2 colorcolumn=80:
