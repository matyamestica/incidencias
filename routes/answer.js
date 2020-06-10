'use strict'

var express = require('express');
var AnswerController = require('../controllers/answer');
var api = express.Router();
var md_auth = require('../middlewares/authenticated');

api.get('/answer', md_auth.ensureAuth, AnswerController.getAnswer);

module.exports = api;