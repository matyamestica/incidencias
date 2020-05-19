'use strict'

var fs = require('fs');
var path = require('path');

var User = require('../models/user');
var Subject = require('../models/subject');
var Category = require('../models/category');

function getProblem(req, res){
    res.status(200).send({message: 'Método getProblem del controlador problem.js'});
}

module.exports = {
    getProblem
}


