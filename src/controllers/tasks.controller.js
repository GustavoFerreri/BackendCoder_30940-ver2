'use strict'

// Traemos la conexion a la base de datos
const { getConnection } = require('../database')
// Dejamos comentado la generacion de id mediante uuid
const { v4 } = require ('uuid')

const getAll = (req, res) => {
    const products = getConnection().read();
    res.json(products)
}

const getById = () =>{
    const product = getConnection().read().find({id: req.params.id}).value();
    res.json(product)
}

// Mantenemos el count para inicio de contador segun objetivo
let count = 1
const createProduct = async (req, res) => {
    const newProduct ={
        id: v4(),
        title: req.body.title,
        price: req.body.price,
        img: req.body.img,
        description: req.body.description
    }
    getConnection().data.product.push(newProduct)
    await getConnection().write()
    console.log(req.body)
    res.send(req.body)
}

const updateProduct = async (req, body) => {
    const result = await getConnection().get('product').find({id: req.params.id})
        .assign(req, body)
        .write();
    res.json(result)
}

module.exports = {
    getAll,
    getById,
    updateProduct,
    createProduct
}