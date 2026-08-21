import express from "express";
import {
  signUp,
  signIn,
  signOut,
  updateProfile,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth_middleware.js";


const router = express.Router();

router.post("/signup", signUp);

router.post("/signin", signIn);

router.post("/signout", signOut);
router.push("/update-profile", protectRoute, updateProfile);

export default router;