var express = require('express');
var path = require('path');
var app = express();
var convert = require('./server/jsonToCSV.js').convert;
var PORT = 3000;

app.use(express.json());

app.get('/', (req, res, next) => {
  console.log(`${req.method} request at url ${req.url}`);
  next();
});

app.post('/api/JSONconvert', (req, res) => {
  console.log(`${req.method} request at url ${req.url}`);
  var csvOutput = convert(req.body);
  res.status(201).send(csvOutput);
});

app.use('/', express.static('client'));

app.listen(PORT, () => {
  console.log('Server listening on port:', PORT);
});