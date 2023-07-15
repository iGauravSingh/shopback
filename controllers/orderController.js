const ORDER = require('../models/orderModel')
const asyncHandler = require('express-async-handler')


// create order
// POST /order/add
// route type Protected

const createOrder = asyncHandler(async (req,res)=>{
    const { userId, order, totalAmount } = req.body
    console.log('in createorder')

    const newOrder = await ORDER.create({
        userId,
        order,
        totalAmount
    })
    res.status(201).json(newOrder)
})


module.exports = {createOrder}
