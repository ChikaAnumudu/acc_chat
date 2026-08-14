import express from "express";

const router = express.Router();

router.get("/message", (req, res)=>{
    res.send('God is with you Clinton');
})

export default router;