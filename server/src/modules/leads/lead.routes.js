import { Router } from "express";

import * as leadController from "./lead.controller.js";

import authMiddleware from "../../middleware/auth.middleware.js";
import authorize from "../../middleware/role.middleware.js";
import validate from "../../middleware/validate.middleware.js";

import {
  createLeadSchema,
  updateLeadSchema,
} from "./lead.validator.js";

const router = Router();

/*
|--------------------------------------------------------------------------
| Authentication
|--------------------------------------------------------------------------
*/

router.use(authMiddleware);

/*
|--------------------------------------------------------------------------
| Lead Routes
|--------------------------------------------------------------------------
*/

router.post(
  "/",
  validate(createLeadSchema),
  leadController.createLead
);

router.get(
  "/",
  leadController.getAllLeads
);

router.get(
  "/:id",
  leadController.getLeadById
);

router.patch(
  "/:id",
  validate(updateLeadSchema),
  leadController.updateLead
);

router.delete(
  "/:id",
  authorize("ADMIN"),
  leadController.deleteLead
);

export default router;