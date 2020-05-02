// packages that installed used npm
require("dotenv").config({ path: "./config.env" });
const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const todoRoute = require("./routes/todoRoutes");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
// const DB = process.env.CLOUDDB || process.env.LOCALDB;
// const DB = process.env.LOCALDB || process.env.CLOUDDB;
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD,
);

//setting the view template and serving the static files from public directory
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// parsing the requestes to req.body
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

//to use the delete http verb on a regular html form
app.use(methodOverride("_method"));

// establshing a connection to the database
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection successful"))
  .catch((err) => console.log(err.message));

// using a toude route as a middle ware on the slash entry
app.use("/", todoRoute);

// starting the server on the port 3000 or on heroku port
app.listen(PORT, () => console.log("Server initiated"));
