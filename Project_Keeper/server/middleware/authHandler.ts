import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import jwt from "jsonwebtoken";
import { userModel } from "../ProjectUsers/userModel";
export interface AuthRequest extends Request {
  user: any;
}

export const authHandler = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.jwt;

  if (!token) {
    return next(createHttpError(401, "Unauthorized User"));
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY!) as {
      id: string;
    };
    req.user = await userModel.findById(decoded.id).select("-password");

    if (!req.user) return next(createHttpError(404,"Unauthorized:User not found"))

    next();
  } catch (err) {
    return next(createHttpError(401, "Unauthorized: Invalid or expired token"));
  }
};
