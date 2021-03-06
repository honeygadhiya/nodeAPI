const express = require('express');
// var bodyParser = require('body-parser');
const app = express(); // the main app
const routes = require('./routes/routes.js');
const winston = require('winston');

app.set('view engine', 'pug');
app.set('views', './views');

app.use('/', routes);
app.use(express.static('./public'));


app.listen(process.env.PORT || 3000,'0.0.0.0');
