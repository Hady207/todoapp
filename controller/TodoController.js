// importing the mongoDB model
const Todo = require("../models/todo");

// controller for retriving the data and rendering the homepage
exports.todos = async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.render("app", { todos });
  } catch (error) {
    res.send(error.message);
  }
};

// controller that handles updating the data
// this controller is made as a REST API controller that sends json response
// used axios with this controller
exports.todosUpdate = async (req, res) => {
  const { todo } = req.body;
  const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, {
    todo: todo,
  });

  res.status(201).json({
    status: "success",
    data: {
      updatedTodo,
    },
  });
};

// controller that creates the todo and save it into the database
// used with regular form
exports.todosCreate = async (req, res) => {
  const newTodo = await Todo.create({
    todo: req.body.todo,
  });
  res.redirect("/");
};

// controller used for deletion of the data
//  regular html form with the DELETE verb hit that controller
exports.todosDelete = async (req, res) => {
  const doc = await Todo.findByIdAndDelete(req.params.id);
  res.redirect("/");
};
