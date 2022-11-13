import express from "express";
import {
  getUserDetail,
  createUser,
  updateUser,
} from "../controllers/user.controller.js";
// import { upload } from "../controllers/image.controller.js";

const router = express.Router();
router.get("/:id", getUserDetail);
router.post("/createUser", createUser);
router.patch("/user/:id" / updateUser);
//router.post("/upload", upload);

export default router;
