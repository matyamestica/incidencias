'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//cargar rutas

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//configurar cabeceras http
app.use((req, res, next) => {
    res.header('Acces-Control-Allow-Origin','*');
    res.header('Acces-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Acces-Control-Allow-Methods','GET, POST, PUT, OPTIONS, DELETE');
    res.header('Allow','GET, POST, PUT, OPTIONS, DELETE');

    next();
});


//tutas base

module.exports = app;
