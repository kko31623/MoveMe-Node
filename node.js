var express = require('express'); 
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json('application/json'));

app.use(express.static(__dirname));

var request = require('request');

app.get('/', function(req, res){
  res.sendfile('index.html');
});

app.post('/houses', function(req, res){
  var location = req.body.location;
  var url = 'http://api.zoopla.co.uk/api/v1/property_listings.json?area=' + location + '&api_key=c88442waawanw44ygzem2ee2';
  request(url, function (error, response, body) {
    res.send(body);
  })
});

 var port = 3030;
 app.listen(port);