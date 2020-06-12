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

module.exports = {
    getProblem,
    saveProblem
}