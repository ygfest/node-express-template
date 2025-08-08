import { Router } from "express";
import healthRouter from "../routes/health.route";
import openAIRouter from "../routes/openai.route";

const router = Router();

router.use("/", healthRouter);
router.use("/open", openAIRouter);

export default router;
