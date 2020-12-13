import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import products from './data/products.js'


import productRoutes from './routes/productRoutes'


dotenv.config()
connectDB()
const app = express()

app.get('/', (req, res) => {
  res.send('Api is running')
})

app.use('/products', productRoutes)
const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server is running on Port ${PORT}`))
