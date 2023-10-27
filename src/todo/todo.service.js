const {
  findAllTodo,
  insertTodo,
  findTodoList,
  editTodo,
  deleteTodo,
} = require("./todo.repository");

const getAllTodoList = async () => {
  const todos = await findAllTodo();
  return todos;
};

const getTodoListbyId = async (todoID) => {
  const todo = await findTodoList(todoID);
  if (!todo) throw new Error("To Do List not found");
  return todo;
};

const createTodo = async (todoList) => {
  const todo = await insertTodo(todoList);
  return todo;
};

const editTodos = async (todoID, todoList) => {
  await getTodoListbyId(todoID);
  const todo = await editTodo(todoID, todoList);
  return todo;
};

const deleteTodobyId = async (todoID) => {
  await getTodoListbyId(todoID);
  await deleteTodo(todoID);
};

module.exports = {
  getAllTodoList,
  getTodoListbyId,
  createTodo,
  editTodos,
  deleteTodobyId,
};
