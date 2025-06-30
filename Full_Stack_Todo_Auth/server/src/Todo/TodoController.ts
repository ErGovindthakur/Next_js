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

export const updateTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  let { todoTitle, todoTask } = req.body;

  try {
    // Addition things => create empty obj and initialize with two props
    const updateTodoField: Partial<{ todoTile: string; todoTask: string }> = {};

    if (todoTitle !== undefined) updateTodoField.todoTile = todoTitle;
    if (todoTask !== undefined) updateTodoField.todoTask = todoTask;

    const updatedTodo = await TodoModel.findByIdAndUpdate(id, updateTodoField, {
      new: true,
    });

    if (!updatedTodo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }

    await updatedTodo.save();

    res.status(201).json({
      success: true,
      message: "Todo Updated",
      todo: updatedTodo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : "Failed to update todo",
    });
  }
};

export const deleteTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
     const {id} = req.params;
  try {
     const deletedTodo = await TodoModel.findByIdAndDelete(id);

     if(!deletedTodo){
          return res.status(404).json({
               success:false,
               message:"Todo not found"
          })
     }

     res.status(200).json({
          success:true,
          message:"Todo deleted successfully"
     })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : "Failed to update todo",
    });
  }
};