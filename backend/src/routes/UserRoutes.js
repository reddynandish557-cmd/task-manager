import validator from "../middleware/validator.js";
import express from "express";

import {
  createUserSchema,
  updateUserSchema,
} from "../validators/UserValidator.js";

import {
  createUser,
  updateUser,
  getAllUsers,
  getUserById,
  deleteUser,
} from "../controllers/userControllers.js";

import { requireAuth } from "../middleware/auth.js";
import { authorizeRoles } from "../middleware/role.js";

const router = express.Router();

router.use(requireAuth, authorizeRoles("admin"));

router.post(
  "/",
  requireAuth,
  authorizeRoles("admin"),
  validator(createUserSchema),
  createUser,
);
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.put(
  "/:id",
  validator(updateUserSchema),

  updateUser,
);
router.delete("/:id", deleteUser);

export default router;
