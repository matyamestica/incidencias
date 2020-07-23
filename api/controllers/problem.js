'use strict'

var path = require('path');
var fs = require('fs');
var moment = require('moment');

var Problem = require('../models/problem');
var Subcategory = require('../models/subcategory');
var Subject = require('../models/subject');
var User = require('../models/user');

function getProblem(req, res){
    var problemId = req.params.id;

    Problem.findById(problemId, (err, problem) => {
        if(err){
            res.status(500).send({message: 'Error en la petición'});
        }else{
            if(!problem){
                res.status(404).send({message: 'La categoría no existe'});
            }else{
                res.status(200).send({problem});
            }
        }
    });
}

function saveProblem(req, res){
    var problem = new Problem();

    var params = req.body;
    console.log(params);
    var hourFin = new Date();
    hourFin = moment().add(1, 'hours');
    problem.code = params.code;
    problem.user_create = params.user_create;
    problem.description = params.description;
    problem.user_secretary = 'null';//MODIFICAR PARA OBTENER ID SECRETARIA
    problem.user_director = 'null';//MODIFICAR PARA OBTENER ID DIRECTOR
    problem.file = 'null'; //MODIFICAR PARA PODER SUBIR ARCHIVO
    problem.subject = params.subject;
    problem.category = params.category;
    problem.subcategory = params.subcategory;
    problem.state = "active";
    problem.date_create = new Date();//MODIFICAR PARA OBTENER FECHA DE CREACIÓN
    problem.date_fin = hourFin;//MODIFICAR PARA OBTENER FECHA DE CIERRE

    problem.save((err, problemStored) => {
        if(err){
            res.status(500).send({message:'Error al ingresar problema'});
        }else{
            if(!problemStored){
                res.status(404).send({message:'El error no ha sido ingresado'});
            }else{
                res.status(200).send({problem: problemStored});
            }
        }
    });
}

function getProblems(req, res){
    if(req.params.page){
        var page = req.params.page;
    }else{
        var page = 1;
    }
   
    var itemsPerPage = 15;

    Problem.find().populate({path: 'user_create'}).populate({path: 'category'}).populate({path: 'subcategory'}).populate({path: 'subject'}).sort('name').paginate(page, itemsPerPage, function(err, problems, total){
        if(err){
            res.status(500).send({message:'Error en la petición'});
        }else{
            if(!problems){
                res.status(404).send({message: 'No hay ramos'});
            }else{
                return res.status(200).send({
                    total_items: total,
                    problems: problems
                });
            }
        }
    });

}

module.exports = {
    getProblem,
    getProblems,
    saveProblem
}