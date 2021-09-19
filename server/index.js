const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', function (req, res) {
  res.send('Restaurant Review Application Server');
});

app.listen(PORT, function (req, res) {
  console.log(`Server running on port ${PORT}`);
});
