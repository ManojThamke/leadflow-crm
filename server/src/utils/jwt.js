import jwt from "jsonwebtoken";
import env from "../config/env.js";

export const generateAccessToken = (payload) => {
  return jwt.sign(payload, env.jwtSecret, {
    expiresIn: env.jwtExpiresIn,
  });
};

export const verifyAccessToken = (token) => {
  return jwt.verify(token, env.jwtSecret);
};