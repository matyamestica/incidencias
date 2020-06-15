'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProblemSchema = Schema({
    code: String,
    user_create: { type: Schema.ObjectId, ref: 'User' },
    description: String,
    user_secretary: String,
    user_director: String,
    subject: { type: Schema.ObjectId, ref: 'Subject' },
    file: String,
    category: { type: Schema.ObjectId, ref: 'Category' },
    subcategory: { type: Schema.ObjectId, ref: 'Subcategory' },
    state: String,
    date_create: String,
    date_fin: String
});

module.exports = mongoose.model('Problem', ProblemSchema);