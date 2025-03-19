import asyncHandler from "@repo/utils/asyncHandler";
import verifyJwt from "@repo/utils/verifyJwt";
import { Request } from "express";

interface AuthRequest extends Request {
  email: string;
}

const userAuthentication = asyncHandler(async (req, res, next) => {
  const accessToken = req.get("Authorization")?.split(" ")[1];
  if (!accessToken) {
    res.status(401).json({ message: "unauthorized access" });
    return;
  }

  const decoded = await verifyJwt(accessToken);
  if (!decoded) {
    res.status(403).json({ message: "Error while decoding token" });
    return;
  }

  (req as AuthRequest).email = decoded.email;
  next();
});

export default userAuthentication;
