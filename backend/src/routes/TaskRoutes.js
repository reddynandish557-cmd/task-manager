import validator from "../middleware/validator.js";
import express from "express";

import {
  createTaskSchema,
  updateTaskSchema,
} from "../validators/TaskValidator.js";

import {
  createTask,
  getAllTasks,
  updateTask,
  getTaskById,
  deleteTask,
} from "../controllers/taskController.js";

import { requireAuth } from "../middleware/auth.js";
import { checkTaskOwnership } from "../middleware/ownerShip.js";

const router = express.Router();

router.use(requireAuth);

router.post("/", validator(createTaskSchema), createTask);
router.get("/", getAllTasks);
router.get("/:id", getTaskById);
router.put("/:id", validator(updateTaskSchema), updateTask);
router.delete("/:id", deleteTask);

export default router;
