import { ZodError } from "zod";
import { ApiError } from "./ApiError";

export function globalErrorHandler(err, req, res, next) {
  if (err instanceof ZodError) {
    res.status(400).json({ message: 'Validation Error' });
  } else if (err instanceof ApiError) {
    res.status(err.statusCode).json({ message: err.message });
  } else {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}