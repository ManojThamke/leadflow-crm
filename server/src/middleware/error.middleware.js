import { sendError } from "../shared/responses/apiResponse.js";

const errorHandler = (err, req, res, next) => {
  return sendError(res, {
    statusCode: err.statusCode || 500,
    message: err.message || "Internal Server Error",
    errors: err.errors || [],
  });
};

export default errorHandler;