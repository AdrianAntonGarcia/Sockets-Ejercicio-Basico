const Server = require('./models/server');

const server = new Server();

server.execute();

// En el argumento socket, viene el cliente que se conecto
// io.on('connection', (socket) => {
//   socket.emit('mensaje-bienvenida', {
//     msg: 'Bienvenido al server',
//     fecha: new Date(),
//   });

//   socket.on('mensaje-cliente', (data) => {
//     console.log(data);
//   });

//   socket.on('mensaje-to-server', (data) => {
//     console.log(data);
//     /*solo emitimos al cliente que mando el mensaje, estamos ejecutando sobre socket*/
//     //socket.emit('mensaje-from-server', data);
//     // con io enviamos a todas las personas
//     io.emit('mensaje-from-server', data );
//   });
// });
