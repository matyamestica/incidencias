'use strict'

var express = require('express');
var SubjectController = require('../controllers/subject');
var api = express.Router();
var md_auth = require('../middlewares/authenticated');

api.get('/subject/:id',md_auth.ensureAuth, SubjectController.getSubject);
api.post('/subject',md_auth.ensureAuth, SubjectController.saveSubject);
api.put('/subject/:id',md_auth.ensureAuth, SubjectController.updateSubject);
api.get('/subjects/:page?',md_auth.ensureAuth, SubjectController.getSubjects);
api.delete('/subject/:id',md_auth.ensureAuth, SubjectController.deleteSubject);


module.exports = api;