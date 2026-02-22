import express from "express";
import { getMessages, sendMessage } from "../controller/message.controller.js";
import protectRoute from "../midleware/protectRoute.js";

const router = express.Router();

router.get("/:id",protectRoute, getMessages);
router.post("/send/:id",protectRoute, sendMessage);

export default router