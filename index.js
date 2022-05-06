'use strict'

// Declaramos el dotenv para utilizar las variables de entorno
require('dotenv').config();
const port = process.env.PORT || 8000;
const app = require('./src/app');
const { getAll, createProduct } = require ('./src/controllers/task.controller')

// Traemos la conexion a la db a traves de lowdb
const { createConnection } = require('./src/database');
createConnection(); 

// Declaramos todo lo necesario para socket.io
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);


// Funcion con comillas
io.on("connection", (socket)=>{
    console.log('User Conected');
    socket.on('allProduct', ()=>{
        io.sockets.emit('allProduct');
    });
    socket.on('createProduct', (product)=>{
        createProduct(product);
        io.sockets.emit('allProduct');
    })
})

server.listen(port, ()=>{
    console.log(`Servidor corriendo en http://localhost:${port}`);
})
