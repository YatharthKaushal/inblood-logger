import { Router } from "express";
import logsRoutes from "./src/logs/logs.route.js";

const router = Router();

router.use("/logs", logsRoutes);

export default router;
