import express from "express";
import { signUp, signIn, signOut, updateProfile } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth_middleware.js";
import { arcjetProtection } from "../middleware/arcjet_middleware.js";
import route from "./user.route.js";


const router = express.Router();
router.use(arcjetProtection);



route.get("/checking", (req, res) => {
  res.status(200).json({ message: "Check well" });
});

router.post("/signup", signUp);
router.post("/signin", signIn);  
router.post("/signout", signOut);

router.post("/update-profile", protectRoute, updateProfile);

router.get("/check", protectRoute, (req, res) =>
  res.status(200).json(req.user)
);


export default router;