var express = require('express');
var router = express.Router();

var restify = require('restify-clients');
var assert = require('assert');

var client = restify.createJsonClient({
  url: 'http://localhost:4000'
});

router.get('/', function(req, res, next) {
  client.get('/users', function(err, request, response, obj) {
    assert.ifError(err);
  
    res.end(JSON.stringify(obj, null, 2));
  });
});

router.post('/', function(req, res, next) {

  client.post('/users', req.body, function(err, request, response, obj) {
    assert.ifError(err);
    console.log('aaaa: %d -> %j', response.statusCode, response.headers);
    console.log('%j', obj);
  });

});


module.exports = router;
