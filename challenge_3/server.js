const express = require('express');
const app = express();
const port = 3000;


app.use('/', (req, res, next) => {
  console.log(`${req.method} @ ${req.url}`);
  next();
});

app.use(express.static('public'));

app.listen(port);