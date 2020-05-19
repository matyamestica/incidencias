'use strict'

var express = require('express');
var ProblemController = require('../controllers/problem');
var api = express.Router();
var md_auth = require('../middlewares/authenticated');

api.get('/problem',md_auth.ensureAuth, ProblemController.getProblem);

module.exports = api;