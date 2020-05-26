'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SubcategorySchema = Schema({
    name: String,
    description: String,
    date: String,
    file: String
});

module.exports = mongoose.model('Subcategory', SubcategorySchema);