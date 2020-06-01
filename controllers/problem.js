'use strict'

var path = require('path');
var fs = require('fs');

var Problem = require('../models/problem');
var Subcategory = require('../models/subcategory');
var Subject = require('../models/subject');
var User = require('../models/user');

function getProblem(req, res){
    res.status(200).send({message: 'Método getProblem del controlador Problem'});
}

module.exports = {
    getProblem
}