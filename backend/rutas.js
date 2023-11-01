var Controlador = require("./controlador");
var mainDir="";
module.exports = {
    pricipal:function(app){
        app.get("/api/mascotas",Controlador.getMascotas);

        app.post("/api/mascota", Controlador.setMascota);

        app.delete("/api/mascota/:mascota_id",Controlador.removeMascota)

        app.put("/api/mascota/:mascota_id", Controlador.updateMascota);

        app.get("*",function(req,res){
            res.sendFile(mainDir+"./angular/index.html");
        })
    },
    iniciar:function(main){
        mainDir=main
    }
};