const expect = require('chai').expect;
const fetch = require('node-fetch');
const aServer = require('../index');

describe('bla', () => {
  it('should be ok', function (done) {
    this.timeout(10000);
    setTimeout(() => { //workaround for this sample
      fetch('http://localhost:4002').then(res => {
        expect(res.status).to.equal(200);
        done();
      });
    }, 5000);
  });
});