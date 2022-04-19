'use strict'
const { Low, JSONFile } = require('lowdb');
const path = require('path');
const filePath = path.join(__dirname, '/');

const file = path.join(filePath, 'products.json')

let db; 

// para correr correctamente se tuvo que modificar el package.json para ignorar el archivo puesto 
// generaba un bucle infinito
const createConnection = async () =>{
    db = new Low(new JSONFile(file))
    await db.read()
    db.data ||= { posts: [] }
    await db.write();
};

const getConnection = () => db;

module.exports = { createConnection, getConnection }