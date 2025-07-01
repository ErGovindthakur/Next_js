import express from "express"
import todoRouter from "./Todo/TodoRoutes";
import bodyParser from "body-parser"
import cors from "cors"

const app = express();

app.use(cors({
     origin:'http://localhost:5173',
     credentials:true
}))

// Middleware
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))


app.use("/api/todo",todoRouter)

export default app