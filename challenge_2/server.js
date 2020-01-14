var express = require('express');
var app = express();
var path = require('path');
var PORT = 3000;

app.get('/', (req, res, next) => {
  console.log(`${req.method} request at url ${req.url}`);
  next();
});

app.post('/api/JSONconvert', (req, res) => {
  console.log(`${req.method} request at url ${req.url}`);
  console.log(req.body);
  res.send('JSON received');
});

app.use('/', express.static('client'));

app.listen(PORT, () => {
  console.log('Server listening on port:', PORT);
});