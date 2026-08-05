import asyncHandler from "../../utils/asyncHandler.js";

import { sendSuccess } from "../../shared/responses/apiResponse.js";

import * as authService from "./auth.service.js";

export const register = asyncHandler(async (req, res) => {
  const user = await authService.register(req.body);

  return sendSuccess(res, {
    statusCode: 201,
    message: "User registered successfully.",
    data: user,
  });
});

export const login = asyncHandler(async (req, res) => {
  const result = await authService.login(req.body);

  return sendSuccess(res, {
    message: "Login successful.",
    data: result,
  });
});