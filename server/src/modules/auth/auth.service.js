import bcrypt from "bcrypt";

import ApiError from "../../shared/errors/ApiError.js";

import { generateAccessToken } from "../../utils/jwt.js";

import {
  findUserByEmail,
  createUser,
} from "./auth.repository.js";

const SALT_ROUNDS = 10;

/**
 * Register a new user
 */
export const register = async (payload) => {
  const existingUser = await findUserByEmail(payload.email);

  if (existingUser) {
    throw new ApiError(409, "Email already exists.");
  }

  const hashedPassword = await bcrypt.hash(
    payload.password,
    SALT_ROUNDS
  );

  const user = await createUser({
    ...payload,
    password: hashedPassword,
  });

  return {
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
  };
};

/**
 * Login existing user
 */
export const login = async ({ email, password }) => {
  const user = await findUserByEmail(email);

  if (!user) {
    throw new ApiError(401, "Invalid email or password.");
  }

  const isPasswordValid = await bcrypt.compare(
    password,
    user.password
  );

  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid email or password.");
  }

  if (!user.isActive) {
    throw new ApiError(
      403,
      "Your account has been deactivated."
    );
  }

  const accessToken = generateAccessToken({
    id: user._id,
    role: user.role,
  });

  return {
    accessToken,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  };
};