const PRODUCT = require('../models/productModel')
const asyncHandler = require('express-async-handler')

// desc add product
// dummy route used for seeding

const createProduct = asyncHandler(async (req,res)=>{
    
    
    const response = await PRODUCT.create({
        name: req.body.name,
        image: req.body.image,
        quantity: req.body.quantity,
        rating: req.body.rating,
        itemType: req.body.itemType
    })
    res.status(201).json(response)
})

// desc get all products
const getProduct = asyncHandler(async (req,res)=>{
    const prod = await PRODUCT.find()
    res.status(200).json(prod)
})



// desc get product type


// desc get specific product
const getProductId = asyncHandler(async (req,res)=>{
    const prod = await PRODUCT.findOne({_id: req.params.id})
    res.status(201).json(prod)
})


module.exports = {
    getProduct,createProduct,getProductId
}
