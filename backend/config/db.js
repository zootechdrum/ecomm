import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        })
        console.log('The database connected')
    } catch (error) {
        console.log(`Error: ${error.message}`)
        process.exit(1)
    }
}
export default connectDB
