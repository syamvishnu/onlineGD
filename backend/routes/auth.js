import express from "express";
const router = express.Router();

import { postRegister, getRegister }  from "../controllers/register.js";
import { login, getLogin }  from "../controllers/login.js";
import { postHome, getHome }  from "../controllers/home.js";
import { getLogout } from "../controllers/logout.js";


//Register Routes
router.route("/register").post(postRegister);

router.route("/register").get(getRegister);

//Login Route
router.route("/login").post(login);
router.route("/login").get(getLogin);

// Logout Route
router.route("/logout").get(getLogout);
//Home Routes
router.route("/").post(postHome)

router.route("/").get(getHome)

export default router;

