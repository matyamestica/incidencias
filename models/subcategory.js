'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SubcategorySchema = Schema({
    name: String,
    description: String,
    category: {type: Schema.ObjectId, ref:'Category'},
    file: String
});

module.exports = mongoose.model('Subcategory', SubcategorySchema);