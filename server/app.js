var http       = require('http'),
    express    = require('express'),
    cons       = require('consolidate'),
    browserify = require('browserify-middleware');


var app = express();

console.log('Starting app...');

// assign the underscore engine to .html files
app.engine('html', cons.underscore);

browserify.settings.development('basedir', __dirname);

app.use('/static/js', browserify('./static/js/dist'));
app.get('/js/kuan.min.js', browserify('./static/js/canvex/boot.js'));

// set .html as the default extension
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/static'));
console.log(__dirname + '/static');

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
