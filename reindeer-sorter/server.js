var express = require('express'),
    bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.post('/', function(request, response){
  console.log(request.body);      // JSON Req
  response.send(request.body);    // echo the Req
});

app.listen(8080);
