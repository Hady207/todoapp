const express = require("express");
const router = express.Router();
const {
  todos,
  todosUpdate,
  todosDelete,
  todosCreate,
} = require("../controller/TodoController");

// establish the http endpoints and match it with a designated controller
router.get("/", todos);
// html form with POST Verb use this route
router.post("/newtodo", todosCreate);
// axios on the frontend use this route
router.patch("/update/:id", todosUpdate);
// html form with delete Verb use this route
router.delete("/delete/:id", todosDelete);

module.exports = router;
