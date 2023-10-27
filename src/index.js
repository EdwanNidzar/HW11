const express = require("express");
const dotenv = require("dotenv");

const todoRoutes = require("./todo/todo.routes");

const app = express();

dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());

app.get("/api", (req, res) => {
  res.send("hi");
});

app.use(todoRoutes);

app.listen(PORT, () => {
  console.log("Server berjalan di http://localhost:" + PORT);
});
