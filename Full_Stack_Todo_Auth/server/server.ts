import app from "./src/app";
import { connectDb } from "./src/db/db";
import dotenv from "dotenv"
dotenv.config()

const port = process.env.PORT || 8000;

const startServer = async() => {
     await connectDb()
     app.listen(port,()=>{
          console.log(`http://localhost:${port}`)
     })
}

startServer()