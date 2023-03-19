import express from "express";
import { getStories, getUserStories } from "../controllers/story.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.get("/", verifyToken, getStories);
router.get("/:userId/stories", verifyToken, getUserStories);

export default router;