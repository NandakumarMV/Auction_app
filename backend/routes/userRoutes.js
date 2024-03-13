import express from "express";

const router = express.Router();
import { protect } from "../middlewares/protect.js";
import {
  authUser,
  logOutUser,
  registerUser,
} from "../controllers/userController.js";

router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", logOutUser);

export default router;
