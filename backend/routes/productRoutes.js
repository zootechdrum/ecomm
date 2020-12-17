import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import Product from '../models/productModel'

app.get('/', asyncHandler(async (req, res) => {
    const products = await Product.find({})

    res.json(products)
}))
app.get('/:id', asyncHandler( (req, res) => {
    const product = await Product.findById(req.params.id)

    if(product) {
        res.json(product)

    }else {
        res.status(404).json({message: 'Product not found'})
    }
    console.log(product)
    res.json(product)
}))

export default router
