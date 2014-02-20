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

// assign the underscore engine to .html files
app.engine('html', cons.underscore);

// set .html as the default extension 
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

// Start the app
http.createServer(app).listen(3000, function() {
  console.log('Express app started');
});
// A route for the home page
app.get('/', function(req, res) {
  res.render('index', {
    title: 'Consolidate.js'
  });
});
