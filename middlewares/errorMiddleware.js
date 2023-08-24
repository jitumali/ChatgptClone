const errorResponse = require("../utilis/errorRespone");

const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  // mongoose cast Error
  if (err.name === "castError") {
    const message = "Resources not Found";
    error = new errorResponse(message, 404);
  }

  // dupicalte key error
  if (err.code === 11000) {
    const message = "Duplicate Fiels value enterd";
  }
  // mongoose validation
  if (err.name === "ValidationError") {
    const message = Object.values(err.error).map((val) => val.message);
    error = new errorResponse(message, 400);
    res.status(error.statusCode || 500).json({
      success: false,
      error: error.message || "Server Error",
    });
  }
};

module.exports = errorHandler;
