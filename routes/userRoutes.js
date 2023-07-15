const { protect } = require('../middleware/authMiddleware')
const express = require('express')
const router = express.Router()


const userController = require('../controllers/userController')
// console.log('in user routes')
router.post('/register',userController.register)
router.post('/login',userController.login)
router.post('/additem',protect,userController.addItem)
router.post('/removeitem',protect,userController.removeItem)
router.get('/info',protect,userController.userInfo)

module.exports = router