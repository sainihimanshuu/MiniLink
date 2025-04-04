import asyncHandler from "@repo/utils/asyncHandler";
import verifyJwt from "@repo/utils/verifyJwt";
import { Request, Response, NextFunction } from "express";

interface AuthRequest extends Request {
  email: string;
}

const authenticateUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const accessToken = req.get("Authorization")?.split(" ")[1];
    if (!accessToken) {
      res.status(401).send("unauthorized access");
      return;
    }

    const decoded = await verifyJwt(accessToken);
    if (!decoded) {
      res.status(403).send("Error while decoding token");
      return;
    }

    (req as AuthRequest).email = decoded.email;
    next();
  }
);

export default authenticateUser;
