import { Router } from "express";
import { logHealth, printLog } from "./logs.controller.js";

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
 * @desc Prints received data to console
 * @body { data: string }
 * @response { message: "Log printed", data: null, error: null }
 */
router.post("/", printLog);

export default router;
