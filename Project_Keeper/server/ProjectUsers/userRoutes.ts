import express, { NextFunction, Request, Response } from "express";
import { login, register } from "./userController";

const router = express.Router();

router.post(
  "/register",
  register as (req: Request, res: Response, next: NextFunction) => void
);
router.post(
  "/login",
  login as (req: Request, res: Response, next: NextFunction) => void
);

export const userRouter = router;