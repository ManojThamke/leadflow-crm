import ApiError from "../shared/errors/ApiError.js";

const notFoundHandler = (req, res, next) => {
  next(new ApiError(404, `Route ${req.originalUrl} not found.`));
};

export default notFoundHandler;