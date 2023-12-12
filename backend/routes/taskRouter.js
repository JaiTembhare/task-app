const express = require("express");
const Task = require("../models/taskModel");
const {
  createTask,
  readTasks,
  readTask,
  deleteTask,
  updateTask,
} = require("../controllers/taskController");
const router = express.Router();

// router.route("/").get(readTasks).post(createTask);
// router.route("/:id").get(readTask).delete(deleteTask).put(updateTask);

//Creating Task
router.post("/", createTask);

//Get or Read Data From Database
router.get("/", readTasks);

//Get Single Task From Database
router.get("/:id", readTask);

// Delete Task
router.delete("/:id", deleteTask);

//update Task
router.put("/:id", updateTask);

module.exports = router;
