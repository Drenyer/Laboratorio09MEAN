var mongoose = require("mongoose");
var EsquemaMascota=mongoose.Schema({
    nombre:String,
    tipo:String,
    genero:String,
    fecha_nacimiento:String,
    origen:String
});
module.exports = mongoose.model("Mascotas",EsquemaMascota,"Mascotas");