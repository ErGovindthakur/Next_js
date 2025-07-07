import express from "express"
import { globalErrorHandler } from "./middleware/globalErrorHandler"

const app = express();

app.get("/",(req,res)=>{
     res.send("Working")
})

// here is global error handler
app.use(globalErrorHandler)

export default app;