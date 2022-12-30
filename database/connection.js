//Create the mongodb connection
import mongoose from 'mongoose'

// const main = async () => {
//   await mongoose.connect(
//     'mongodb+srv://Megachin502:Xs32ukfkP1YWJy9h@cluster0.r2zfz.mongodb.net/magnifyaccesstask?retryWrites=true&w=majority',
//   )
//   console.log('Database Connected')
// }

// export default main

const connectMongo = async () => mongoose.connect(process.env.MONGO_URI)
export default connectMongo
