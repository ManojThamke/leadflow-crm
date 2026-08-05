import env from "../../config/env.js";
import { sendSuccess } from "../../shared/responses/apiResponse.js";

export const getHealth = (req, res) => {
  return sendSuccess(res, {
    message: "LeadFlow CRM API is running.",
    data: {
      environment: env.nodeEnv,
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    },
  });
};