'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProblemSchema = Schema({
    code: String,
    user_create: {type: Schema.ObjectId, ref:'User'},
    description: String,
    user_secretary: {type: Schema.ObjectId, ref:'User'},
    user_director: {type: Schema.ObjectId, ref:'User'},
    subject: {type: Schema.ObjectId, ref:'Subject'},
    file: String,
    category: {type: Schema.ObjectId, ref:'Categorie'},
    state: String,
    date_create: Date,
    date_fin: Date
});

module.exports = mongoose.model('Problem', ProblemSchema);