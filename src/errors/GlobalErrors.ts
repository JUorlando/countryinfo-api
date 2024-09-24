import { NextFunction, Request, Response } from "express";
import { AppError } from ".";
import { ZodError } from "zod";

const globalErrors = async (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  if (err instanceof ZodError) {
    return res.status(409).json(err);
  }

  console.log(err);

  return res.status(500).json({ message: "Internal server error" });
};

export default globalErrors;
