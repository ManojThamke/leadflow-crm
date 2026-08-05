import { Router } from "express";

import * as leadController from "./lead.controller.js";

import authMiddleware from "../../middleware/auth.middleware.js";

const router = Router();

router.use(authMiddleware);

router.post("/", leadController.createLead);

router.get("/", leadController.getAllLeads);

router.get("/:id", leadController.getLeadById);

router.patch("/:id", leadController.updateLead);

router.delete("/:id", leadController.deleteLead);

export default router;