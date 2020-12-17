import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import Product from '../models/productModel'

app.get('/', async (req, res) => {
    const products = await Product.find({})

    res.json(products)
})
app.get('/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id)
    console.log(product)
    res.json(product)
})
