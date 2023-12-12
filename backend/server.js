const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connectDB");
const Task = require("./models/taskModel");
const app = express();
const taskRoutes = require("./routes/taskRouter");

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/tasks", taskRoutes);
// const logger = (req, res, next) => {
//   console.log("Middleware ran")
//   console.log(req.method);
// }

// creating Routes
app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {}
};
startServer();
