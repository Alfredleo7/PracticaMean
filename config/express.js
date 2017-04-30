var express = require('express');
var path = require('path');//AYUDA A ESTABLECER ARCHIVOS ESTATICOS
var morgan = require('morgan');
var bodyParser = require('body-parser');
var compress = require('compression');
var config = require('./config');
var session = require('express-session');
var methodOverride = require('method-override');


module.exports = function(){
  var app = express();

  if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
  } else if(process.env.NODE_ENV === 'production'){
    app.use(compress());
  }

  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
  app.use(methodOverride());

  app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: config.sessionSecret
  }));

  app.set('view engine', 'pug');
  app.set('views', './app/views');

  require('../app/routes/index.route.js')(app);
  require('../app/routes/user.route.js')(app);

  app.use(express.static('./public'));

  return app;
}
