import { Router } from "express";
import { logHealth, printLog } from "./logs.controller.js";
import { validate } from "../../middlewares/validate.middleware.js";
import { printLogSchema } from "./logs.validation.js";

const router = Router();

/**
 * @route GET /api/logs/health
 * @desc Health check for logs module
 * @body None
 * @response { message: "logs api route working", data: null, error: null }
 */
router.get("/health", logHealth);

/**
 * @route POST /api/logs
 * @desc Prints received message and data to console
 * @body { message: string|null, data: object|null }
 * @response { message: "Log printed", data: null, error: null }
 */
router.post("/", validate(printLogSchema), printLog);

export default router;
