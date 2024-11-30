import express from "express";
import { protectRotue } from "../middleware/protectRoute.js";
import { followUnfollowUser, getSuggestedUser, getUserProfile, updateUserProfile } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/profile/:username", protectRotue, getUserProfile);
router.get("/suggested",protectRotue, getSuggestedUser);
router.post("/follow/:id", protectRotue,  followUnfollowUser);
router.post("/update", protectRotue, updateUserProfile);


export default router;