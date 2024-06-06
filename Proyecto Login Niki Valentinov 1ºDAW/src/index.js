const express = require("express");
const path = require("path");
const collection = require("./config");
const bcrypt = require('bcrypt');

const app = express();
// convertir datos a formato json
app.use(express.json());
// archivo estático
app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));
//utilizar EJS como motor de visualización
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("login");
});

app.get("/signup", (req, res) => {
    res.render("signup");
});

// Registrar nuevo usuario
app.post("/signup", async (req, res) => {

    const data = {
        name: req.body.username,
        password: req.body.password
    }

    // Comprueba si el nombre de usuario ya existe en la base de datos
    const existingUser = await collection.findOne({ name: data.name });

    if (existingUser) {
        res.send('El usuario ya existe. Por favor escoja un nombre de usuario diferente.');
    } else {
        // Hash para la contraseña usando bcrypt
        const saltRounds = 10; // Number of salt rounds for bcrypt
        const hashedPassword = await bcrypt.hash(data.password, saltRounds);

        data.password = hashedPassword; // Replace the original password with the hashed one

        const userdata = await collection.insertMany(data);
        console.log(userdata);
    }

});

// Login de usuario
app.post("/login", async (req, res) => {
    try {
        const check = await collection.findOne({ name: req.body.username });
        if (!check) {
            res.send("No se puede encontrar el nombre de usuario")
        }
        // Compara la contraseña hash de la base de datos con la contraseña de texto sin formato
        const isPasswordMatch = await bcrypt.compare(req.body.password, check.password);
        if (!isPasswordMatch) {
            res.send("contraseña incorrecta");
        }
        else {
            res.render("home");
        }
    }
    catch {
        res.send("datos incorrectos");
    }
});


// Puerto de la aplicación
const port = 5000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});