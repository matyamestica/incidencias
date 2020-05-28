'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//cargar rutas

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//configurar cabeceras http

//tutas base

module.exports = app;
