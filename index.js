const path = require('path')
const express = require('express')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const colors = require('colors')
const cors = require('cors')
const { errorHandler } = require('./middleware/errorMiddleware')

connectDB()

const app = express()

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/products',require('./routes/productRoutes'))
app.use('/user',require('./routes/userRoutes'))
app.use('/order',require('./routes/orderRoutes'))

// Serve Frontend
if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')))

    app.get('*',(req,res)=> res.sendFile(path.resolve(__dirname, '../','frontend','build','index.html')))
} else {
    app.get('/',(req,res)=> res.send('please set to production'))
}

app.use(errorHandler)

const PORT = process.env.PORT || 4000

app.listen(PORT,()=>{console.log(`listening on port ${PORT}`)})