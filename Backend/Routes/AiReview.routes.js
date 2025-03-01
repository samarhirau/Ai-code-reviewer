import express from "express";
import { getReview } from "../Controllers/AiReview.controller.js"; // Named import

const router = express.Router();

router.post("/get-review", getReview);

export default router;
