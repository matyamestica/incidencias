'use strict'

var path = require('path');
var fs = require('fs');

var Subcategory = require('../models/subcategory');
var Subject = require('../models/subject');
var User = require('../models/user');

function getSubcategory(req, res){
    res.status(200).send({message: 'Método getSubcategory del controlador Subcategory'});
}

module.exports = {
    getSubcategory
}