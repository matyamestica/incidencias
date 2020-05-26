'use strict'
<<<<<<< HEAD

var fs = require('fs');
var path = require('path');
var mongoosePaginate = require('mongoose-pagination');

var User = require('../models/user');
var Subject = require('../models/subject');
var Category = require('../models/category');

function getSubject(req, res){
    var subjectId = req.params.id;

    Subject.findById(subjectId, (err, subject) => {
        if(err){
            res.status(500).send({message: 'Error en la petición'});
        }else{
            if(!subject){
                res.status(404).send({message: 'El ramo no existe'});
            }else{
                res.status(200).send({subject});
            }
        }
    });
}

function getSubjects(req, res){
    if(req.params.page){
        var page = req.params.page;
    }else{
        var page = 1;
    }
   
    var itemsPerPage = 3;

    Subject.find().sort('name').paginate(page, itemsPerPage, function(err, subjects, total){
        if(err){
            res.status(500).send({message:'Error en la petición'});
        }else{
            if(!subjects){
                res.status(404).send({message: 'No hay ramos'});
            }else{
                return res.status(200).send({
                    total_items: total,
                    subjects: subjects
                });
            }
        }
    });

}

function saveSubject(req, res){
    var subject = new Subject();

    var params = req.body;
    subject.name = params.name;
    subject.code = params.code;
    subject.teacher = params.teacher;

    subject.save((err, subjectStored) => {
        if(err){
            res.status(500).send({message: 'Error al guardar el Ramo'});
        }else{
            if(!subjectStored){
                res.status(404).send({message: 'El ramo no se ha podido guardar'});
            }else{
                res.status(200).send({subject: subjectStored});
            }
        }
    });
}

function updateSubject(req, res){
    var subjectId = req.params.id;
    var update = req.body;

    Subject.findByIdAndUpdate(subjectId, update, (err, subjectUpdated) => {
        if(err){
            res.status(500).send({message: 'Error al guardar el ramo'});
        }else{
            if(!subjectUpdated){
                res.status(404).send({message: 'El Ramo no ha sido actualizado'});
            }else{
                res.status(200).send({subject: subjectUpdated});
            }
        }
    });
}

function deleteSubject(req, res){
    var subjectId = req.params.id;

    Subject.findByIdAndRemove(subjectId, (err, subjectRemoved) => {
        if(err){
            res.status(500).send({message: 'Error en la petición'});
        }else{
            if(!subjectRemoved){
                res.status(404).send({message: 'El Ramo no se ha eliminado'});
            }else{
                console.log(subjectRemoved);
                res.status(200).send({subjectRemoved});
            }
        }
    });
}

module.exports = {
    getSubject,
    getSubjects,
    saveSubject,
    updateSubject,
    deleteSubject
}

=======
//librerias para trabajar con el sistema de fichero, para subir archivos
var path = require('path');
var fs = require('fs');
>>>>>>> c96de0a36a81041fe13245e7feb6b718de24d575

