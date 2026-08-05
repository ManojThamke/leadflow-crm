export const sendSuccess = (
  res,
  {
    statusCode = 200,
    message = "Request successful.",
    data = null,
    meta = null,
  } = {}
) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
    meta,
  });
};

export const sendError = (
  res,
  {
    statusCode = 500,
    message = "Something went wrong.",
    errors = [],
  } = {}
) => {
  return res.status(statusCode).json({
    success: false,
    message,
    errors,
  });
};