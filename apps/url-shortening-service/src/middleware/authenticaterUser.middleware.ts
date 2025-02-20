import asyncHandler from "@repo/utils/src/asyncHandler";
import verifyJwt from "@repo/utils/src/verifyJwt";
import { Request, Response, NextFunction } from "express";

interface AuthRequest extends Request {
  email: string;
}

const authenticateUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const accessToken = req.get("Bearer")?.split(" ")[1];
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
