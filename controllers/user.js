'use strict'

var bcrypt = require('bcrypt-nodejs');
var User = require('../models/user');


function pruebas(req, res){
    res.status(200).send({
        message: 'Probando una accion del controlador de usuario'
    });
}

function saveUser(req, res){
    var user = new User();

    var params = req.body;
    
    console.log(params);

    user.name = params.name;
    user.surname = params.surname;
    user.email = params.email;
    user.rut =  params.rut;
    user.image = 'null';
    user.role = 'ROLE_USER';

    if(params.password){
        //Encriptar contraseña y guardarla en la base de datos

    }else{
        res.status(500).send({message: 'Introduzca la contraseña'});
    }

}

module.exports = {
    pruebas,
    saveUser
};