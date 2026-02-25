import express from "express";
import { getMe, login, logOut, singUp } from "../controller/auth.controller.js";
import protectRoute from "../midleware/protectRoute.js";

const router = express.Router();

router.post("/sign-up", singUp);

router.post("/login", login);

router.post("/logout", logOut);

router.get("/me", protectRoute, getMe);

export default router;
