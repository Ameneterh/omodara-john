import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import {
  deleteUser,
  getAllUsers,
  getUser,
  getUsers,
  logout,
  updateUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/logout", logout);
router.put("/update/:userId", verifyToken, updateUser);
router.delete("/delete/:userId", verifyToken, deleteUser);
router.get("/getusers", getUsers);
router.get("/getallusers", getAllUsers);
router.get("/:userId", getUser);

export default router;
