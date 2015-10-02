var express = require('express'); 
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json('application/json'));

app.use(express.static(__dirname));

app.get('/', function(req, res){
	res.sendfile('index.html');
});
app.post('/houses', function(req, res){
	var location = req.body.location;
	console.log("From Client Post request: location = " + location);
});

 var port = 3030;
 app.listen(port);