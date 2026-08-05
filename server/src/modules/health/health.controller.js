import env from "../../config/env.js";

export const getHealth = (req, res) => {
  res.status(200).json({
    success: true,
    message: "LeadFlow CRM API is running.",
    data: {
      environment: env.nodeEnv,
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    },
  });
};