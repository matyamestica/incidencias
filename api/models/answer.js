'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnswerSchema = Schema({
    problem: {type: Schema.ObjectId, ref:'problem'},
    user: {type: Schema.ObjectId, ref:'User'},
    message: String,
    date: String,
    file: String
});

module.exports = mongoose.model('Answer', AnswerSchema);