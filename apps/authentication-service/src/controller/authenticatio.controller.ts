import z from "zod";
import { Request, Response, NextFunction } from "express";
import { prisma } from "../index";
import asyncHandler from "@repo/utils/src/asyncHandler";
import bcrypt from "bcrypt";

const createUserSchema = z.object({
  name: z.string().trim(),
  email: z.string().email().trim(),
  password: z.string().trim(),
});

const createUser = asyncHandler(
  async (req: Request, res: Response, _: NextFunction) => {
    const parsedData = createUserSchema.parse(req.body);

    const emailExists = await prisma.user.findFirst({
      where: { email: parsedData.email },
    });
    if (emailExists) {
      res.status(400).json({ message: "email already exists" });
      return;
    }

    const hashedPassword = await bcrypt.hash(parsedData.password, 10);

    await prisma.user.create({
      data: {
        name: parsedData.name,
        email: parsedData.email,
        password: hashedPassword,
        refreshToken: "",
      },
    });

    res.status(201).json({ message: "user created successfully" });
    return;
  }
);

const loginUserSchema = z.object({
  email: z.string().email().trim(),
  password: z.string().trim(),
});

const loginUser = () => {};

const logOut = () => {};

const refreshAccessToken = () => {};

export { createUser, loginUser, logOut, refreshAccessToken };
