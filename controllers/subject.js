'use strict'

var path = require('path');
var fs = require('fs');

var Subject = require('../models/subject');
var User = require('../models/user');

function getSubject(req, res){
    res.status(200).send({message: 'Método getSubject del controlador Subject'});
}

module.exports = {
    getSubject
}