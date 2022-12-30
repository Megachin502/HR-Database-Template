import mongoose from 'mongoose'

//Create the mongodb connection
const connectMongo = async () => mongoose.connect(process.env.MONGO_URI)
export default connectMongo
