// Servidor de express
const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');
const Sockets = require('./sockets');

// Servidor de sockets
class Server {
  constructor() {
    // Aplicación de express
    this.app = express();
    this.port = process.env.PORT;

    // Http Server
    this.server = http.createServer(this.app);

    // Configuraciones de sockets
    this.io = socketio(this.server, {
      /*Configuraciones */
    });
  }

  middlewares() {
    // Desplegar el directorio público
    this.app.use(express.static(path.resolve(__dirname, '../public')));
  }

  configurarSockets() {
    new Sockets(this.io);
  }
  execute() {
    // Inicializar middlewares
    this.middlewares();
    // Inicializar sockets
    this.configurarSockets();
    // Inicializar Server
    this.server.listen(this.port, () => {
      console.log('Server corriendo en puerto: ', this.port);
    });
  }
}

module.exports = Server;
