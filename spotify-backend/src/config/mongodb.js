import mongoose from "mongoose";

const connectDB = async () =>{
    //for establishing connection

    mongoose.connection.on('connected',()=>{
        console.log("connection established");
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/spotify`);
}

export default connectDB;