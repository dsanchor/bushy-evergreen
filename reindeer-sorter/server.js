var express = require('express'),
    bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.post('/', function(request, response){
  console.log("Request Body: " + request.body);      // JSON Req
  response.send(request.body);    // echo the Req
  console.log("Response Body: " + response.body);      // JSON Req
});

app.listen(8080);
