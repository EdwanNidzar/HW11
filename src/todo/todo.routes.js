const express = require("express");
const todoRouter = express.Router();

const {
  getTodo,
  createTodo,
  getTodoByID,
  editTodo,
  deleteTodo,
} = require("./todo.controller");

todoRouter.get("/api/lists", getTodo);
todoRouter.post("/api/lists", createTodo);
todoRouter.get("/api/lists/:id", getTodoByID);
todoRouter.put("/api/lists/:id", editTodo);
todoRouter.delete("/api/lists/:id", deleteTodo);

module.exports = todoRouter;
