const express = require('express');
require('dotenv').config();
const cors = require(icors);

const { dbConnection } = require('./database/config');


//Crear el servidor expres
const app = express();

// Configurar cors
app.use(cors());

// Llamando la conexion a bd
dbConnection();

// Rutas
app.get( '/', (req, res) => {

    res.json({
        ok: true,
        msg: 'Hola mundo'
    });

});

app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en el puerto ' + process.env.PORT);
});