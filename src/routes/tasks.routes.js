'use strict'

const { Router } = require ('express');
const router = Router();
const { getAll, getById, createProduct, updateProduct, deleteProduct } = require ('../controllers/tasks.controller')

router.get('/', (req, res)=>{
    res.render('index', {titulo: 'Hola mundo a traves de HBR'})
})
router.get('/product/', getAll)
router.get('/product/:id', getById)
router.get('/productCreate', (req, res)=>{
    res.render('chargeProduct')
})
router.post('/product', createProduct)
router.put('/product/:id', updateProduct)
router.delete('/product/:id', deleteProduct)

module.exports = router;