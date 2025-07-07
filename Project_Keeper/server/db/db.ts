import mongoose from "mongoose";

export const connectDb = async() => {
     try{
          mongoose.connect(`${process.env.MONGO_URI}`);

          mongoose.connection.on("connected",()=>{
               console.log("Db connected successfully ")
          })

          mongoose.connection.on("error",()=>{
               console.log("Error while db connection");
          })
     }
     catch(err){
          const customError = err instanceof Error ? err.message : "Unable to connect db"
          console.log(customError)
          process.exit(1);
     }
}