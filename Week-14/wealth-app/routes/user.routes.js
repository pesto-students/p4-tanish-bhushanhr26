import express from "express";
import {
  getUserDetail,
  createUser,
  //updateUser,
} from "../controllers/user.controller.js";
import {
  userAssests,
  updateUserAssests,
} from "../controllers/assets.controllers.js";
// import { upload } from "../controllers/image.controller.js";

const router = express.Router();
//router.get("/:id", getUserDetail);
router.get("/:id", userAssests);
router.post("/createUser", createUser);
//router.patch("/user/:id" / updateUser);
//router.post("/upload", upload);
router.put("/updateUser/:id", updateUserAssests);

export default router;
