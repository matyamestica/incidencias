'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = Schema({
    name: String,
    description: String,
    subcategory: {type: Schema.ObjectId, ref:'Subcategory'},
    file: String
});

module.exports = mongoose.model('category', CategorySchema);