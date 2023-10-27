const todoService = require("./todo.service");

const getTodo = async (req, res) => {
  const todo = await todoService.getAllTodoList();
  res.json({
    data: todo,
  });
};

const createTodo = async (req, res) => {
  try {
    const todoList = req.body;
    const todo = await todoService.createTodo(todoList);

    res.json({
      messgae: "create To Do success",
      data: todo,
    });
  } catch (e) {
    res.status(400).send(err.message);
  }
};

const getTodoByID = async (req, res) => {
  try {
    const todoID = parseInt(req.params.id);
    const todo = await todoService.getTodoListbyId(todoID);
    res.send(todo);
  } catch (e) {
    res.status(400).send(e.message);
  }
};

const editTodo = async (req, res) => {
  try {
    const todoID = parseInt(req.params.id);
    const todoList = req.body;

    if (!todoList) {
      return res.status(400).send("fields missing");
    }

    const todo = await todoService.editTodos(todoID, todoList);

    res.json({
      messgae: "update To Do success",
      data: todo,
    });
  } catch (e) {
    res.status(400).send(e.message);
  }
};

const deleteTodo = async (req, res) => {
  try {
    const todoID = parseInt(req.params.id);
    await todoService.deleteTodobyId(todoID);
    res.send("delete succes");
  } catch (e) {
    res.status(400).send(e.message);
  }
};

module.exports = { getTodo, createTodo, getTodoByID, editTodo, deleteTodo };
