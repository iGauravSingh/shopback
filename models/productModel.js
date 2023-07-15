
const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: String,
    quantity: Number,
    rating: Number,
    itemType: {
        type: String,
        enum: ['cloth','elec','furniture','other'],
        default: 'other'
    }
},{
    timestamps: true
})

module.exports = mongoose.model('PRODUCT',productSchema)



