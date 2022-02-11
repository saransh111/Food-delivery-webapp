import express from "express";
import {
  authUser,
  registerUser,
  updateUserProfile,
} from "../Controllers/userControllers.js";
const router = express.Router();

router.route("/register").post(registerUser);
router.post("/login", authUser);
router.route("/profile").post(updateUserProfile);

export default router;