import express from "express";
import { protectRotue } from "../middleware/protectRoute.js";
import { deleteNotifications, getNotifications } from "../controllers/notification.controller.js";

const router = express.Router();

router.get("/", protectRotue, getNotifications);
router.delete("/", protectRotue, deleteNotifications);

export default router;