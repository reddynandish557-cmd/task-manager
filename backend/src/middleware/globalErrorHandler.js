export default function globalErrorHandler(err, req, res, next) {
  console.error(err.status);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Oops! Something went wrong!",
    status: err.status || 500,
  });
}
