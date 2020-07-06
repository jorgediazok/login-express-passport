const express = require('express');
const engine = require('ejs-mate');
const path = require('path');
const morgan = require('morgan');
const passport = require('passport');
const session = require('express-session');

//Initializations
const app = express();
require('./database');
require('./passport/local-auth');

//Settings
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(session());
app.use(passport.initialize());
app.use(passport.session());

//Routes
app.use('/', require('./routes/index'));

//Starting server

app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});