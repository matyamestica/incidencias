'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3977;

'use strict'

var nodemailer = require('nodemailer');
var express = require('express');
var app = express();



mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/incidencias', {useNewUrlParser: true, useUnifiedTopology: true}, (err, res) => {
    if(err){
        throw err;
    }else{
        console.log("La base de datos esta corriendo correctamente...");
        app.listen(port, function(){
            console.log("Servidor del api rest escuchando en el puerto http:localhost:"+port);
        });
    }

});

/*app.post('/send-email', (req, res) => {
    var transporter = nodemailer.createTransport({
        pool: true,
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: "clare3@ethereal.email",
            pass: "xnEcAbMSjtrtqPpAt4",
        },
    });

    var mailOptions = {
        from: "Remitente",
        to: "lala@yopmail.com",
        subject: "Enviado desde Nodemailer",
        text: "Funciona"
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            res.status(500).send(error.message);
        }else{
            console.log('Email Enviado');
            res.status(200).jsonp(req.body);
        }
    })
});*/