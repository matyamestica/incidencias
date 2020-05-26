'use strict'

var express = require('express');
var CategoryController = require('../controllers/category');
var api = express.Router();
var md_auth = require('../middlewares/authenticated');

api.get('/category',md_auth.ensureAuth, CategoryController.getCategory);

module.exports = api;