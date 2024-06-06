const mongoose = require('mongoose');
const connect = mongoose.connect("mongodb://localhost:27017/Login");

// Verificación de base de datos conectada o no
connect.then(() => {
    console.log("Conectado a la base de datos");
})
.catch(() => {
    console.log("No se pudo conectar a la base de datos");
})

// Crear modelo
const Loginschema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// Crear colección
const collection = new mongoose.model("users", Loginschema);

module.exports = collection;