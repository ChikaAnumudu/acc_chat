import express from "express";
import {
  getAllContacts,
  getChatPartners,
  getMessageByUserId,
  sendMessage,
} from "../controllers/message.controller.js";
import { protectRoute } from "../middleware/auth_middleware.js";
import { arcjetProtection } from "../middleware/arcjet_middleware.js";


const router = express.Router();
// the middlewares execute in order - so requests get rate-limited first, then authenticated.
// this is actually more efficient since  unauthenticated request get block by the rate limiting before hitting the auth middleware. 
router.use( arcjetProtection, protectRoute );

router.get("/contacts", getAllContacts);
router.get("/chats", getChatPartners);
router.get("/:id",  getMessageByUserId);
router.post("/send/:id", sendMessage)

export default router;