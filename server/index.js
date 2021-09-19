const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT;

app.get('/', function (req, res) {
  res.send('Restaurant Review Application Server');
});

app.listen(port, function (req, res) {
  console.log(`Server running on port ${port}`);
});
