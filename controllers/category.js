'use strict'

var path = require('path');
var fs = require('fs');

var Category = require('../models/category');
var Problem = require('../models/problem');
var Subcategory = require('../models/subcategory');
var Subject = require('../models/subject');
var User = require('../models/user');

function getCategory(req, res){
    res.status(200).send({message: 'Método getCategory del controlador Category'});
}

module.exports = {
    getCategory
}