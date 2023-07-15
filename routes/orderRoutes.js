const { protect } = require('../middleware/authMiddleware')
const express = require('express')
const router = express.Router()

const orderController = require('../controllers/orderController')


router.post('/add',protect,orderController.createOrder)


module.exports = router



