import dotenv from 'dotenv'
import express from 'express'
import connectDB from './config/db.js'
import products from './data/products.js'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'
import productRoutes from './routes/productRoutes.js'

dotenv.config()
connectDB()
const app = express()

app.get('/', (req, res) => {
    res.send('Api is running')
})

app.use('/api/products', productRoutes)
app.use(notFound)
app.use(errorHandler)


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server is running on Port ${PORT}`))
