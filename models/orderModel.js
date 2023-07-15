const mongoose = require('mongoose')


const orderSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'USER'
    },
    order: [],
    totalAmount: Number,
    address: {
        type: String,
        default: '123/ 456 kamlapuram delhi 234432'
    },
    phoneNumber:{
        type: Number,
        default: 9999888811
    }
})

module.exports = mongoose.model('ORDER',orderSchema)










