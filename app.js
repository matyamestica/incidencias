'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//cargar las rutas
var user_routes = require('./routes/user');
var problem_routes = require('./routes/problem');
var subject_routes = require('./routes/subject');
var subcategory_routes = require('./routes/subcategory');
var category_routes = require('./routes/category');
var answer_routes = require('./routes/answer');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//configurar cabeceras http

//rutas base
app.use('/api',user_routes);
app.use('/api',problem_routes);
app.use('/api',subject_routes);
app.use('/api',subcategory_routes);
app.use('/api',category_routes);
app.use('/api',answer_routes);


module.exports = app;

