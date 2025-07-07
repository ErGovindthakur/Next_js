import express from "express"
import { globalErrorHandler } from "./middleware/globalErrorHandler"
import { userRouter } from "./ProjectUsers/userRoutes";

const app = express();

app.use(express.json());

app.use("/api/v1/project",userRouter)

// here is global error handler
app.use(globalErrorHandler)

export default app;