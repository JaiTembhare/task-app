const Task = require("../models/taskModel");
//Create Task
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
//Read Tasks
const readTasks = async (req, res) => {
  try {
    const task = await Task.find();
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//Get Single Task
const readTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json(`No Task with id: ${id} `);
    }
    res.status(500).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//Delete task
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      return res.status(404).json(`No Task with id: ${id} `);
    }
    res.status(200).send("Task Deleted.");
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//Uapdate a task
const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json({ msg: "Task not found" });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  createTask,
  readTasks,
  readTask,
  deleteTask,
  updateTask,
};
