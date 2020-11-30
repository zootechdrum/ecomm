import mongoose from 'mongoose'
import dotenv from 'dotenv'
import users from './data/users.js'
import products from './data/users.js'
import User from './data/userModel.js'
import Product from './data/productModel.js'
import Order from './data/orderModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async() => {
  try{
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()
  
    const createdUsers = await User.insertMany(users)
    const sampleProducts = products.map(product => {
      return {...product, user:adminUser}
    })
    console.log(sampleProducts)
  }catch(error)
}
