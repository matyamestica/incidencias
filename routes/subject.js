'use strict'

var express = require('express');
var SubjectController = require('../controllers/subject');
var api = express.Router();
var md_auth = require('../middlewares/authenticated');

api.get('/subject', md_auth.ensureAuth, SubjectController.getSubject);

module.exports = api;