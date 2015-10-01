var http = require('http');
var express = require('express'); 
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname));

app.get('/', function(res, req){
	res.sendfile('index.html');
});
app.post('/houses', function(res, req){
	var location = req.body;
	console.log("From Client Post request: location = " + location);
});

 var port = 3030;
 app.listen(port);