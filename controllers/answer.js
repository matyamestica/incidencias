'use strict'

var fs = require('fs');
var path = require('path');

var User = require('../models/user');
var Subject = require('../models/subject');
var Category = require('../models/category');

function getAnswer(req, res){
    res.status(200).send({message: 'Método getAnswer del controlador answer.js'});
}

module.exports = {
    getAnswer
}