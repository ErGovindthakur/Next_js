import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import { userModel } from "./userModel";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken";
import { PassThrough } from "stream";

// 1. Register user
export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      return next(createHttpError(400, "All fields are required"));
    }

    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return next(createHttpError(401, "User already exists, login now"));
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });

    // ✅ Set cookie token
    generateToken(res, String(newUser._id));

    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (err) {
    next(
      createHttpError(
        500,
        err instanceof Error ? err.message : "Error while registering the user"
      )
    );
  }
};

// 2. Login user
export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;

  try {
    // 1. Check for empty fields
    if (!email || !password) {
      return next(createHttpError(400, "All fields are required"));
    }

    // 2. Find user by email
    const existingUser = await userModel.findOne({ email });

    if (!existingUser) {
      return next(createHttpError(401, "User doesn't exist, register now"));
    }

    const isMatchedPassword = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isMatchedPassword) {
      return next(createHttpError(404, "Invalid credentials"));
    }

    // 4. Generate token and set it as cookie
    generateToken(res, String(existingUser._id));

    // 5. Send success response
    res.status(200).json({
      success: true,
      message: "Login successfully",
      user: {
        id: existingUser._id,
        name: existingUser.name,
        email: existingUser.email,
      },
    });
  } catch (err) {
    return next(
      createHttpError(
        500,
        err instanceof Error ? err.message : "Unable to login"
      )
    );
  }
};
