import app from "./src/app.js";
import { connectDb } from "./src/db/db.js";

const port = process.env.PORT || 8080;

const myServer = async() => {
     await connectDb();
     app.listen(port,()=>{
          console.log(`Server is running at http://localhost:${port}`)
     })
}

myServer();