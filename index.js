const express = require('express');
const app = express();
const port = 3000;
var cors = require('cors');

/*
var corsOptions = {
  origin: 'http://example.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
*/

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(cors());

app.get('/', function (req, res) {
  console.log('get / OK');
  res.send({ name: 'Mes données backend v2' });
});

app.get('/tab', function (req, res) {
  console.log('get /tab OK');
  res.send([{id: 1, name: 'ABC', numero: 3}]
    );
});

app.get('/tab2', function (req, res) {
  console.log('get /tab2 OK');
  res.send([
  {
    "id": 1,
    "name": "john",
    "age": 21
  },
/*
  {
    "id": 2,
    "name": "judy",
    "age": 31
  },
  {
    "id": 3,
    "name": "jack",
    "age": 41
  }
  */
]
    );
});

app.route('/cats').post((req, res) => {
  console.log('post /cats OK');
  res.status(201).send(req.body);
});

app.route('/').post((req, res) => {
  console.log('post / OK');
  res.status(201).send(req.body);
});

app.route('/post').post((req, res) => {
  console.log('post /post OK : ' + req.body.name);
  res.status(202).send(req.body);
});


app.get("/get", function (req, res) {
  res.json({response: "envoi d un GET"});
});


app.listen(port, function () {
  console.log('App sur port ' + port);
});
