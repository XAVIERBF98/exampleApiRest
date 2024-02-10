const express = require("express");
const cors = require("cors");
class Server {


    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.usersPath = '/api/users';
        //Midlewares
        this.midlewares();
        //rutas de mi aplicacion
        this.routes();
    }

    midlewares() {

        //Cors
        this.app.use(cors());
        //Lectura y Parseo
        this.app.use(express.json());
        //Directorio Publico
        this.app.use(express.static('public'))
    }

    routes() {

        this.app.use(this.usersPath,require("../routes/users.routes"))

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor corriendo en el puerto", this.port);
        });
    }
}

module.exports = Server;
