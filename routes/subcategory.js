'use strict'

var express = require('express');
var SubcategoryController = require('../controllers/subcategory');
var api = express.Router();
var md_auth = require('../middlewares/authenticated');

api.get('/subcategory',md_auth.ensureAuth, SubcategoryController.getSubcategory);

module.exports = api;