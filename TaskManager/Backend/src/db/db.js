import mongoose from "mongoose";

export const connectDb = async() => {
     try{
          mongoose.connect(`${process.env.MONGO_URI}`);

          mongoose.connection.on("connected",()=>{
               console.log("DB connected successfully")
          })

          mongoose.connection.on("error",()=>{
               console.log("DB Error")
          })
     }
     catch(err){
          console.log(err.message)
          process.exit(1)
     }
}