'use strict'

// Traemos la conexion a la base de datos
const { getConnection } = require('../database')
// Dejamos comentado la generacion de id mediante uuid
const { v4 } = require ('uuid')

const getAll = (req, res) => {
    const products = getConnection().data.product;
    res.json(products)
}

const getById = (req, res) =>{
    const product = getConnection().data.product;
    console.log(product.filter(prod => prod.id === req.params.id))
    res.json(product.filter(prod => prod.id === req.params.id))
}

// Mantenemos el count para inicio de contador segun objetivo
// let count = 1
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

const updateProduct = async (req, res) => {
    const { title, price, img, description } = req.body;
    const db = getConnection();
    const prodRes = await db.data.product.find(prod=>prod.id === req.params.id);
    prodRes.title = title;
    prodRes.price = price;
    prodRes.img = img;
    prodRes.description = description;
    db.data.product.map(prod=>(prod.id === req.params.id ? prodRes : prod));
    console.log(prodRes)
    console.log(req.body)
    await db.write();
    res.json(prodRes)
}

module.exports = {
    getAll,
    getById,
    updateProduct,
    createProduct
}