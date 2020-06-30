'use strict'

var path = require('path');
var fs = require('fs');

var Answer = require('../models/answer');
var Category = require('../models/category');
var Problem = require('../models/problem');
var Subcategory = require('../models/subcategory');
var Subject = require('../models/subject');
var User = require('../models/user');
const answer = require('../models/answer');

function getAnswers(req, res){
    if(req.params.page){
        var page = req.params.page;
    }else{
        var page = 1;
    }
   
    var itemsPerPage = 15;

    Answer.find().sort('name').paginate(page, itemsPerPage, function(err, answers, total){
        if(err){
            res.status(500).send({message:'Error en la petición'});
        }else{
            if(!answers){
                res.status(404).send({message: 'No hay categorías'});
            }else{
                return res.status(200).send({
                    total_items: total,
                    answers: answers
                });
            }
        }
    });
}    

function saveAnswer(req, res){
    var answer = new Answer();

    var params = req.body;
    answer.problem = params.problem;
    answer.user = params.user;
    answer.message = params.message;
    answer.date = params.date;
    answer.file = params.file;

    answer.save((err, answerStored) => {
        if(err){
            res.status(500).send({message: 'Error al guardar la respuesta'});
        }else{
            if(!answerStored){
                res.status(404).send({message: 'La respuesta no ha sido guardado'});
            }else{
                res.status(200).send({answer: answerStored});
            }
        }
    });

}

module.exports = {
    getAnswers,
    saveAnswer
}