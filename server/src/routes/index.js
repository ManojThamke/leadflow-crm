import { Router } from "express";

import healthRoutes from "../modules/health/health.routes.js";
import authRoutes from "../modules/auth/auth.routes.js";
import leadRoutes from "../modules/leads/lead.routes.js";

const router = Router();

router.use("/health", healthRoutes);

router.use("/auth", authRoutes);

router.use("/leads", leadRoutes);

export default router;