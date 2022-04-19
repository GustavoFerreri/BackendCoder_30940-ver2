'use strict'

const { Router } = require ('express');
const router = Router();
const { getAll, getById, createProduct, updateProduct } = require ('../controllers/tasks.controller')

router.get('/product', getAll)
router.get('/product/:id', getById)
router.post('/product', createProduct)
router.put('/product/:id', updateProduct)
router.delete('/product/:id', )

module.exports = router;