const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Mes données backend');
});

app.get('/tab', function (req, res) {
  res.send([id=1, name='ABC', numero=3]);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

