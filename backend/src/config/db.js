import mongoose from "mongoose"
import { ENV } from "./env.js"

export const connectDB = async()=>{
    try {
        await mongoose.connect(ENV.MONGO_URI)
        console.log("connected to DB successful")
    } catch (error) {
        console.log("error connecting to MONGODB");
        process.exit(1)
    }
}