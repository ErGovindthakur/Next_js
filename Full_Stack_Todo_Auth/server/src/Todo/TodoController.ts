// Writing code to perform crud over the todo

import { Request, Response, NextFunction } from "express";
import TodoModel from "./TodoModel";

export const createTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { todoTitle, todoTask } = req.body;
  if (!todoTask || !todoTitle) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  try {
    const data = await TodoModel.find();

    await TodoModel.create({
      todoTitle,
      todoTask,
    });

    res.status(201).json({
      success: true,
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
};

export const updateTodo = async(req: Request, res: Response, next: NextFunction) => {
     const {id} = req.params;
     const {todoTitle,todoTask} = req.body;

  try {
     const todo = await TodoModel.findByIdAndUpdate(id,)


  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
};
