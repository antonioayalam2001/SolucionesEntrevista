const express = require('express');

const {dbConnection} = require("../database/config");

class Server {
      constructor() {
            this.app = express();
            this.PORT = process.env.PORT;
            this.authPath = '/api'
            //DB connection
            this.dbConnection()
            //Middlewares
            //    Aquellos que se eejcutan siempre que se levanta el servidor
            this.middlewares()
            //Rutas de la aplicacion
            this.routes();
      }

      async dbConnection() {
            await dbConnection();
      }

      middlewares() {
            //PUBLIC DIRECTORY
            this.app.use(express.static('public'));
      }

      routes() {
            // this.app.use(this.authPath, require('../routes/stations'))
      };
      start() {
            this.app.listen(this.PORT, () => {
                  console.log('Listening from port number : ', this.PORT);
            })
      }
}

module.exports = Server;