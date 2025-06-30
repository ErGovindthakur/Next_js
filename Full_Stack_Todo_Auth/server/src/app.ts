import express from "express"
import todoRouter from "./Todo/TodoRoutes";
import bodyParser from "body-parser"

const app = express();

// Middleware
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use("/api/todo",todoRouter)

export default app