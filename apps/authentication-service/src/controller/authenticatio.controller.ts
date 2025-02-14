import z from "zod";
import { Request } from "express";
import { prisma } from "../index";
import asyncHandler from "@repo/utils/src/asyncHandler";
import bcrypt from "bcrypt";
import { User } from "@prisma/client";
import jwt, { Secret } from "jsonwebtoken";

interface AuthRequest extends Request {
  user: User;
}

const generateAccessAndRefreshToken = async (user: User) => {
  const accessToken = jwt.sign(
    { id: user.id, email: user.email },
    process.env.ACCESS_TOKEN_SECRET as Secret,
    { expiresIn: 60 * 60 }
  );
  const refreshToken = jwt.sign(
    { id: user.id, email: user.email },
    process.env.REFRESH_TOKEN_SECRET as Secret,
    { expiresIn: "15d" }
  );

  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      refreshToken: refreshToken,
    },
  });

  return { accessToken, refreshToken };
};

const createUserSchema = z.object({
  name: z.string().trim(),
  email: z.string().email().trim(),
  password: z.string().trim(),
});

const createUser = asyncHandler(async (req, res, _) => {
  const parsedData = createUserSchema.parse(req.body);

  const emailExists = await prisma.user.findFirst({
    where: { email: parsedData.email },
  });
  if (emailExists) {
    res.status(409).json({ message: "email already exists" });
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
});

const loginUserSchema = z.object({
  email: z.string().email().trim(),
  password: z.string().trim(),
});

const loginUser = asyncHandler(async (req, res, _) => {
  const parsedData = loginUserSchema.parse(req.body);

  const user = await prisma.user.findUnique({
    where: {
      email: parsedData.email,
    },
  });
  if (!user) {
    res.status(404).json({ message: "account does not exits, signup first" });
    return;
  }

  const isPasswordCorrect = await bcrypt.compare(
    parsedData.password,
    user.password
  );
  if (!isPasswordCorrect) {
    res.status(401).json({ message: "incorrect password" });
    return;
  }

  const { accessToken, refreshToken } =
    await generateAccessAndRefreshToken(user);

  const options = {
    httpOnly: true,
    //secure: true,
    sameSite: "none" as "none", //change this later
  };

  res
    .status(200)
    .cookie("refreshToken", refreshToken, options)
    .json({ message: "login successful", accessToken: accessToken });
  return;
});

const logOut = asyncHandler(async (req, res, _) => {
  const user = (req as AuthRequest).user;

  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      refreshToken: "",
    },
  });

  const options = {
    httpOnly: true,
    //secure: true,
    sameSite: "none" as "none", //change this later
  };

  res
    .status(200)
    .clearCookie("refreshToken", options)
    .json({ message: "logout successful" });
  return;
});

const refreshAccessToken = asyncHandler(async (req, res, _) => {
  const oldRefreshToken = req.cookies.refreshToken;
  if (!oldRefreshToken) {
    res.status(401).json({ message: "unauthorized access" });
    return;
  }

  const decodedData = jwt.verify(
    oldRefreshToken,
    process.env.REFRESH_TOKEN_SECRET as Secret
  ) as jwt.JwtPayload;
  const user = await prisma.user.findUnique({
    where: {
      id: decodedData.id,
    },
  });
  if (!user) {
    res.status(401).json({ message: "Invalid refresh token" });
    return;
  }

  if (oldRefreshToken != user.refreshToken) {
    res.status(401).json({ message: "unauthorized access" });
    return;
  }

  const { accessToken, refreshToken } =
    await generateAccessAndRefreshToken(user);

  const options = {
    httpOnly: true,
    //secure: true,
    sameSite: "none" as "none", //change this later
  };

  res
    .status(200)
    .cookie("refreshToken", refreshToken, options)
    .json({ message: "login successful", accessToken: accessToken });
  return;
});

export { createUser, loginUser, logOut, refreshAccessToken };
