const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController')

// console.log('in productRoutes')
router.get('/',productController.getProduct)
router.get('/:id',productController.getProductId)
router.post('/',productController.createProduct)


module.exports = router



