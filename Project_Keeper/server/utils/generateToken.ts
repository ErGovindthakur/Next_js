import { Response } from "express";
import jwt from "jsonwebtoken";
export const generateToken = (res: Response, userId: string) => {

     // token sign
  const token = jwt.sign({ id: userId }, process.env.SECRET_KEY!, {
    expiresIn: "7d",
  });

  // set token into cookie
  res.cookie("jwt",token,{
     httpOnly:true, // prevent js violation
     secure:process.env.ENV === "production",
     sameSite:"strict",
     maxAge:7*24*60*60*1000
  })
};
