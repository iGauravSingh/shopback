const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: String,
    cart: [],
    history: [],
})

module.exports = mongoose.model('USER',userSchema)




