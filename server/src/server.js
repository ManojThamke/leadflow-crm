import app from "./app.js";
import env from "./config/env.js";
import connectDatabase from "./config/database.js";
import logger from "./shared/logger/logger.js";

const startServer = async () => {
  try {
    await connectDatabase();

    app.listen(env.port, () => {
      logger.info(
        `🚀 LeadFlow CRM API running on http://localhost:${env.port}`
      );
    });
  } catch (error) {
    logger.error(error, "Server startup failed.");

    process.exit(1);
  }
};

startServer();