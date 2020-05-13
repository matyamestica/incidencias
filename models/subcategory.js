'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SubcategorySchema = Schema({
    name: String,
    description: String
});

module.exports = mongoose.model('Subcategory', SubcategorySchema);