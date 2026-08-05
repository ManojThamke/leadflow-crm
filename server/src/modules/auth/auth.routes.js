import { Router } from "express";

import * as authController from "./auth.controller.js";

import validate from "../../middleware/validate.middleware.js";

import {
  loginSchema,
  registerSchema,
} from "./auth.validator.js";

const router = Router();

router.post(
  "/register",
  validate(registerSchema),
  authController.register
);

router.post(
  "/login",
  validate(loginSchema),
  authController.login
);

export default router;