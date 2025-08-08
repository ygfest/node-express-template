"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = void 0;
exports.errorHandler = errorHandler;
class AppError extends Error {
    constructor(message, statusCode = 500) {
        super(message);
        this.statusCode = statusCode;
    }
}
exports.AppError = AppError;
function errorHandler(err, _req, res, _next) {
    const error = err;
    const status = typeof error.statusCode === "number" ? error.statusCode : 500;
    const message = error.message ?? "Internal Server Error";
    res.status(status).json({ error: { message } });
}
