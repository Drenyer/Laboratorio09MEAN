var Mascota = require("./modelos/mascota");

exports.getMascotas = function (req, res) {
    Mascota.find({})
        .then((mascotas) => {
            res.json(mascotas);
        })
        .catch((err) => {
            res.send(err);
        });
};

exports.setMascota = function (req, res) {
    Mascota.create({
        Nombre: req.body.nombre,
        Tipo: req.body.tipo,
        Genero: req.body.genero,
        Fecha_Nacimiento: req.body.fecha_nacimiento,
        Origen: req.body.origen
    })
        .then(mascota => {
            Mascota.find({})
                .then((mascotas) => {
                    res.json(mascotas);
                })
                .catch((err) => {
                    res.send(err);
                });
        })
        .catch(error => {
            res.send(error);
        });
};

exports.updateMascota = function (req, res) {
    Mascota.updateOne(
        { _id: req.params.mascota_id },
        {
            $set: {
                Nombre: req.body.nombre,
                Tipo: req.body.tipo,
                Genero: req.body.genero,
                Fecha_Nacimiento: req.body.fecha_nacimiento,
                Origen: req.body.origen
            }
        }
    )
        .then(mascota => {
            Mascota.find({})
                .then((mascotas) => {
                    res.json(mascotas);
                })
                .catch((err) => {
                    res.send(err);
                });
        })
        .catch(error => {
            res.send(error);
        });
};

exports.removeMascota = function (req, res) {
    Mascota.deleteOne({ _id: req.params.mascota_id })
        .then(mascota => {
            Mascota.find({})
                .then((mascotas) => {
                    res.json(mascotas);
                })
                .catch((err) => {
                    res.send(err);
                });
        })
        .catch(error => {
            res.send(error);
        });
};

