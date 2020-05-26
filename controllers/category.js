'use strict'

var fs = require('fs');
var path = require('path');

var User = require('../models/user');
var Subject = require('../models/subject');
var Category = require('../models/category');

function getCategory(req, res){
    res.status(200).send({message: 'Método getCategory del controlador Category.js'});
}

module.exports = {
    getCategory
}