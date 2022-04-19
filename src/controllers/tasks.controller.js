'use strict'

// Traemos la conexion a la base de datos
const { getConnection } = require('../database')
// Dejamos comentado la generacion de id mediante uuid
// const { v4 } = require ('uuid')

const getAll = (req, res) => {
    const products = getConnection().get('product').value();
    res.json(products)
}

const getById = () =>{
    const product = getConnection().get('product').find({id: req.params.id}).value();
    res.json(product)
}

// Mantenemos el count para inicio de contador segun objetivo
let count = 1
const createProduct = (req, res) => {
    const newProduct ={
        id: count,
        title: req.body.title,
        price: req.body.price,
        img: req.body.image,
        description: req.body.description
    }
    getConnection().get('product').push(product).write();
    count++
    res.send(newProduct)
}



module.exports = {
    getAll,
    createProduct
}