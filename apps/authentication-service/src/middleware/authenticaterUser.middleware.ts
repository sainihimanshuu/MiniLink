import { Request, Response, NextFunction } from "express";
import { getPrismaClient } from "../connections.js";
import { User } from "@repo/db-authentication";
import asyncHandler from "@repo/utils/asyncHandler";
import verifyJwt from "@repo/utils/verifyJwt";

interface AuthRequest extends Request {
  user: User;
}

const prisma = getPrismaClient();

const userAuthentication = asyncHandler(
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

    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
    });
    if (!user) {
      res.status(403).send("invalid token");
      return;
    }

    (req as AuthRequest).user = user;

    next();
  }
);

export default userAuthentication;
