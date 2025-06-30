import mongoose from "mongoose";

export const connectDb = async() => {
     try{
           mongoose.connect(process.env.MONGO_URI as string)

          mongoose.connection.on("connected",()=>{
               console.log("Db connected")
          })

          mongoose.connection.on("error",()=>{
               console.log("Error occurred")
          })

     }catch(err){
          const customError = err instanceof Error ? err.message : "Unable to connect db"
          console.log(customError)
          process.exit(1)
     }
}