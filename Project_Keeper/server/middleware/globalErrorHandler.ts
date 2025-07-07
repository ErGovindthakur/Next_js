import { NextFunction, Request, Response } from "express";
import { HttpError } from "http-errors";

export const globalErrorHandler = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.status || 500;

  res.status(statusCode).json({
     message:err.message,
     errorStack:process.env.ENV === "development" ? err.stack : ""
  })
};
