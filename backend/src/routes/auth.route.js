import express from "express";

const router = express.Router();

router.get("/signup", (req, res) => {
  res.send("Please sign up!");
});

router.get("/signin", (req, res) => {
  res.send("Please sign in!");
});

export default router;