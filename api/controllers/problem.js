'use strict'

var path = require('path');
var fs = require('fs');

var Problem = require('../models/problem');
var Subcategory = require('../models/subcategory');
var Subject = require('../models/subject');
var User = require('../models/user');

function getProblem(req, res){
    res.status(200).send({message: 'Método getProblem del controlador Problem'});
}

function saveProblem(req, res){
    var problem = new Problem();

    var params = req.body;
    console.log(params);

    problem.code = params.code;
    problem.user_create = params.user_create;
    problem.description = params.description;
    problem.user_secretary = 'null';//MODIFICAR PARA OBTENER ID SECRETARIA
    problem.user_director = 'null';//MODIFICAR PARA OBTENER ID DIRECTOR
    problem.file = 'null'; //MODIFICAR PARA PODER SUBIR ARCHIVO
    problem.subject = params.subject;
    problem.category = params.category;
    problem.subcategory = params.subcategory;
    problem.state = params.state;
    problem.date_create = 'null';//MODIFICAR PARA OBTENER FECHA DE CREACIÓN
    problem.date_fin = 'null';//MODIFICAR PARA OBTENER FECHA DE CIERRE

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

    Problem.find().sort('name').paginate(page, itemsPerPage, function(err, problems, total){
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