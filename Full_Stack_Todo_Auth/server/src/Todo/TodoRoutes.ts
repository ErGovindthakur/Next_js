import express, { NextFunction, Request, Response } from "express";
import { createTodo, deleteTodo, updateTodo } from "./TodoController";

const todoRouter = express.Router();

todoRouter.post(
  "/createTodo",
  createTodo as (req: Request, res: Response, next: NextFunction) => void
);

todoRouter.put(
  "/updateTodo/:id",
  updateTodo as (req: Request, res: Response, next: NextFunction) => void
);

todoRouter.delete(
  "/deleteTodo/:id",
  deleteTodo as (req: Request, res: Response, next: NextFunction) => void
);

export default todoRouter;

/*
createTodo => http://localhost:5000/api/todo/createTodo (post)
updateTodo => http://localhost:5000/api/todo/updateTodo/id (put)
deleteTodo => http://localhost:5000/api/todo/deleteTodo/id (delete)
*/
