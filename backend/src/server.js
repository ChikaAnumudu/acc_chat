import express from "express";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import UserRoutes from "./routes/user.route.js";
import { connectDB } from "./lib/dbs.js";
import path from "path";
import { ENV } from "./lib/env.js";
import cookieParser from "cookie-parser"

const app = express();
app.use(express.json()); 
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/auth", messageRoutes);
app.use("/api/auth", UserRoutes);


// dotenv.config();
const __dirname = path.resolve();
const Port = ENV.PORT || 3000;
app.listen(Port, () => {
  console.log("Server is running on port : " + Port);
  connectDB();
});