/*var server = require("./server");

var handlers = {}
	handlers["/"] = requestHandlers.iniciar;
	handlers["/iniciar"] = requestHandlers.iniciar;

server.iniciar();
*/

// Include the Node HTTP library
var http = require('http');
// Include the Express module
var express = require('express');
var cons = require('consolidate');
// Create an instance of Express
var app = express();

console.log('Starting app...');

app.configure(function() {
	// assign the underscore engine to .html files
	app.engine('html', cons.underscore);

	// set .html as the default extension 
	app.set('view engine', 'html');
	app.set('views', __dirname + '/views');
	app.use(express.static(__dirname + '/static'));
});

// A route for the home page
app.get('/', function(req, res) {
  res.render('index', {
    title: 'Consolidate.js'
  });
});

app.port = 8000;

// Start the app
http.createServer(app).listen(app.port, function() {
  console.log('Listening on port' + app.port);
});
