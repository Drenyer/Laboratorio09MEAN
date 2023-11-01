var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var mongoose = require("mongoose");
var rutas = require("./backend/rutas");

var mongoDB = 'mongodb://127.0.0.1:27017/Lab02';
mongoose.connect(mongoDB, {useNewUrlParser: true,useUnifiedTopology:true});
app.use(express.static(__dirname + '/angular'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

rutas.iniciar(__dirname); 
rutas.pricipal(app);

app.listen(3000);
console.log("Escuchando en el puerto 3000"); 