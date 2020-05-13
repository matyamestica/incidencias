'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorieSchema = Schema({
    name: String,
    description: String,
    subcategories: {type: Schema.ObjectId, ref:'Subcategorie'},
    file: String
});

module.exports = mongoose.model('Categorie', CategorieSchema);