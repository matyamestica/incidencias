'use strict'

var path = require('path');
var fs = require('fs');

var Answer = require('../models/answer');
var Category = require('../models/category');
var Problem = require('../models/problem');
var Subcategory = require('../models/subcategory');
var Subject = require('../models/subject');
var User = require('../models/user');

function getAnswer(req, res){
    res.status(200).send({message: 'Método getAnswer del controlador Answer'});
}

module.exports = {
    getAnswer
}