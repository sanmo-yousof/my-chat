import express from "express"
import { login, logOut, singUp } from "../controller/auth.controller.js";

const router = express.Router();


router.post("/sign-up", singUp);

router.post("/login", login);

router.post("/logout", logOut);

export default router;