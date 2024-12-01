import express from "express";
import { protectRotue } from "../middleware/protectRoute.js";
import { commentOnPost, createPost, deletePost, getAllPosts, getFollowingPosts, getLikedPosts, getUserPosts, likeUnlikePost } from "../controllers/post.controller.js";

const router = express.Router();

router.get("/all", protectRotue, getAllPosts);
router.get("/following", protectRotue, getFollowingPosts);
router.get("/likes/:id", protectRotue, getLikedPosts);
router.get("/user/:username", protectRotue, getUserPosts);
router.post("/create", protectRotue, createPost);
router.post("/like/:id", protectRotue, likeUnlikePost);
router.post("/comment/:id", protectRotue, commentOnPost);
router.delete("/:id", protectRotue, deletePost);

export default router;