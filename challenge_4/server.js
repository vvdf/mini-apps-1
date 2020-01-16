var express = require('express');
var app = express();


app.use((req, res, next) => {
  console.log(`${req.method} request on ${req.url}`);
  next();
});

app.use(express.static('dist'));

app.listen(3000);
