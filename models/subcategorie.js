'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SubcategorieSchema = Schema({
    name: String,
    description: String
});

module.exports = mongoose.model('Subcategorie', SubcategorieSchema);