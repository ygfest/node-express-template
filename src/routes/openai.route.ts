import Router from "express";
import { testGPT5 } from "../controllers/openai.controller";

const router = Router();

router.post("/test5", testGPT5);

export default router;
