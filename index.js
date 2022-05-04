require('dotenv').config();
const app = require('./src/app');
const { createConnection } = require('./src/database');
const port = process.env.PORT || 8000;
const http = require("http");
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

createConnection(); 

// Funcion con comillas
io.on("connection", (socket)=>{
    console.log('User Conected');
    socket.on('dataClient', (data)=>{
        msn.push(data);
        io.sockets.emit('msjClient', msn)
    });
    socket.on('msjBack', (data)=>{
        console.log(data)
    })
})

server.listen(port, ()=>{
    console.log(`Servidor corriendo en http://localhost:${port}`);
})