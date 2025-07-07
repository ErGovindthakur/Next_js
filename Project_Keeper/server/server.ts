import app from "./app";
import dotenv from "dotenv"
import { connectDb } from "./db/db";
dotenv.config();

const port = process.env.PORT || 8080;

const connectServer = async() => {
     await connectDb();
     app.listen(port, ()=>{
          console.log(`server is running at http://localhost:${port}`)
     })
}

connectServer();