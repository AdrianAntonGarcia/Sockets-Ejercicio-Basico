class Sockets {
  constructor(io) {
    this.io = io;
    this.socketEvents();
  }
  socketEvents() {
    // En el argumento socket, viene el cliente que se conecto
    // On conection
    this.io.on('connection', (socket) => {
      socket.emit('mensaje-bienvenida', {
        msg: 'Bienvenido al server',
        fecha: new Date(),
      });

      socket.on('mensaje-cliente', (data) => {
        console.log(data);
      });

      socket.on('mensaje-to-server', (data) => {
        /*solo emitimos al cliente que mando el mensaje, estamos ejecutando sobre socket*/
        //socket.emit('mensaje-from-server', data);
        // con io enviamos a todas las personas
        console.log(data);
        this.io.emit('mensaje-from-server', data);
      });
    });
  }
}

module.exports = Sockets;
