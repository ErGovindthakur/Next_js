import { NextFunction, Request, Response } from "express";
import { HttpError } from "http-errors";

export const globalErrorHandler = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode || 5000;

  res.status(statusCode).json({
     message:err.message,
     errorStack:err.stack
  })
};
