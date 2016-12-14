var express = require('express'),
    bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.post('/', function(request, response){
  console.log("Request Body: " + request.body);      // Log Req
  //var reqJson = JSON.parse(request.body);

  function compare(a,b) {
	  if (a.reindeerName < b.reindeerName) return -1;
	  if (a.reindeerName > b.reindeerName) return 1;
	  return 0;
  }
  request.body.sort(compare);
   //reqJson.sort(compare);          
  
  response.body = JSON.stringify(request.body);
  response.send(response.body);                       // echo the Req
  console.log("Response Body: " + response.body);    // Log Response
});

app.listen(8080);

