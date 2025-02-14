import { ZodError } from "zod";
import { Request, Response, NextFunction } from "express";

const asyncHandler =
  (func: (req: Request, res: Response, next: NextFunction) => Promise<any>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await func(req, res, next);
    } catch (error: any) {
      if (error instanceof ZodError) {
        return res.status(400).json({ error: error });
      }
      return res
        .status(error.statusCode || 500)
        .json({ error: error || "internal server error" });
    }
  };

export default asyncHandler;
