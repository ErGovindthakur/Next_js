import express, { NextFunction, Request, Response } from "express";
import { createTodo } from "./TodoController";

const todoRouter = express.Router();

todoRouter.post(
  "/createTodo",
  createTodo as (req: Request, res: Response, next: NextFunction) => void
);

export default todoRouter