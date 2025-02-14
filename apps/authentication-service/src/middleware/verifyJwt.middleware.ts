import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { prisma } from "../index";
import { User } from "@prisma/client";
import asyncHandler from "@repo/utils/src/asyncHandler";

interface AuthRequest extends Request {
  user: User;
}

const verifyJwt = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const accessToken = req.get("Authorization")?.split(" ")[1];
    if (!accessToken) {
      res.status(401).send("unauthorized access");
      return;
    }

    try {
      var decoded = jwt.verify(
        accessToken,
        process.env.JWT_PUBLIC_KEY as string
      ) as jwt.JwtPayload;
    } catch (error) {
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

export default verifyJwt;
