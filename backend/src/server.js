import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

dotenv.config();
const Port = process.env.PORT || 3000;
const app = express();


app.use("/api/auth", authRoutes);
app.use("/api/auth", messageRoutes);

app.listen(Port, () => {
  console.log("Server is running on port : " + Port);
});