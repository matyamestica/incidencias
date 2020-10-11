'use strict'

var express = require('express');
var ProblemController = require('../controllers/problem');
var api = express.Router();
var md_auth = require('../middlewares/authenticated');

api.get('/problem/:id', md_auth.ensureAuth, ProblemController.getProblem);
api.get('/problems/:page?', md_auth.ensureAuth, ProblemController.getProblems);
api.post('/problem', md_auth.ensureAuth, ProblemController.saveProblem);
api.put('/update-problem/:id', md_auth.ensureAuth, ProblemController.updateProblem);
<<<<<<< HEAD
api.put('/new-user-problem/:id', md_auth.ensureAuth, ProblemController.newUserProblem);

=======
>>>>>>> 875941b9ca8efa695956b98b5fb3117bc3d4af64
module.exports = api;