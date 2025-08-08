import { Request, Response, NextFunction } from "express";

export class AppError extends Error {
  statusCode: number;

  constructor(message: string, statusCode = 500) {
    super(message);
    this.statusCode = statusCode;
  }
}

export function errorHandler(
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  const error = err as Partial<AppError> & { message?: string };
  const status = typeof error.statusCode === "number" ? error.statusCode : 500;
  const message = error.message ?? "Internal Server Error";
  res.status(status).json({ error: { message } });
}
