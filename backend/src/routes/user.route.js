import express from "express";

const route = express.Router();

route.get("/user", (req, res) => {
    res.send("Enter User Name");
});

export default route;