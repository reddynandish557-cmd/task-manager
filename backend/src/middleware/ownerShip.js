import Task from "../models/Task.js";

export const checkTaskOwnership = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    // Admin can access everything
    if (req.user.role === "admin") {
      return next();
    }

    // Check if task belongs to logged-in user
    if (task.userId.toString() !== req.user.userId) {
      return res.status(403).json({ message: "Forbidden: Not Allowed" });
    }

    next(); // ownership confirmed
  } catch (err) {
    next(err);
  }
};
