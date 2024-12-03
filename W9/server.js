const express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require("mongoose"),
  Task = require("./models/todoListModel"),
  bodyParser = require("body-parser");

mongoose.set("strictQuery", true);
mongoose.connect("mongodb://localhost/Tododb");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require("./routes/todoListRoutes");
routes(app);

app.listen(port);
console.log("todo list API is running at http://localhost:" + port);
