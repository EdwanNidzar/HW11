const prisma = require("../db");

const findAllTodo = async () => {
  const todos = await prisma.todo.findMany();
  return todos;
};

const insertTodo = async (todoList) => {
  const todo = await prisma.todo.create({
    data: {
      todo: todoList.todo,
    },
  });
  return todo;
};

const findTodoList = async (todoID) => {
  const todos = await prisma.todo.findUnique({
    where: {
      id: todoID,
    },
  });
  return todos;
};

const editTodo = async (todoID, todoList) => {
  const todos = await prisma.todo.update({
    where: {
      id: todoID,
    },
    data: {
      todo: todoList.todo,
    },
  });
  return todos;
};

const deleteTodo = async (todoID) => {
  await prisma.todo.delete({
    where: {
      id: todoID,
    },
  });
};

module.exports = {
  findAllTodo,
  insertTodo,
  findTodoList,
  editTodo,
  deleteTodo,
};
