'use strict'

var fs = require('fs');
var path = require('path');

var User = require('../models/user');
var Subject = require('../models/subject');
var Subcategory = require('../models/subcategory');
var Category = require('../models/category');

function getSubcategory(req, res){
    res.status(200).send({message: 'Método getSubcategory del controlador subcategory.js'});
}

module.exports = {
    getSubcategory
}