var express         = require( 'express' );
var engine          = require( 'ejs-locals' );
var http            = require( 'http' );
var path            = require( 'path' );
var express         = require( 'express' );
var http            = require( 'http' );
var path            = require( 'path' );
var engine          = require( 'ejs-locals' );
var favicon         = require( 'serve-favicon' );
var cookieParser    = require( 'cookie-parser' );
var bodyParser      = require( 'body-parser' );
var methodOverride  = require( 'method-override' );
var logger          = require( 'morgan' );
var errorHandler    = require( 'errorhandler' );
var static          = require( 'serve-static' );


var app     = express();
// if you make a new file in your controllers folder (to handle other routes) you'll need to mimic the following line
var index   = require('./controllers/index');

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'))
app.engine( 'ejs', engine );
app.set( 'views', path.join( __dirname, '/views' ));
app.set( 'view engine', 'ejs' );
app.use( favicon( __dirname + '/public/favicon.ico' ));
app.use( logger( 'dev' ));
app.use( methodOverride());
app.use( cookieParser());
app.use( bodyParser.json());
app.use( bodyParser.urlencoded({ extended : true }));

// first index is from the variable above, second index notifies which export func. to use inside the target file
app.get('/', index.index);

if ('development' == app.get('env')) {
  app.use( errorHandler());
}


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
