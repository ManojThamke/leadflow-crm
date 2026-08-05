import { Router } from "express";

import { getHealth } from "./health.controller.js";
import authMiddleware from "../../middleware/auth.middleware.js";

const router = Router();

router.get("/", getHealth);

router.get("/private", authMiddleware, getHealth);

export default router;