const express = require("express");
const error = require("../middleware/error");
const genres = require("../routes/genres");
const customers = require("../routes/customers");
const movies = require("../routes/movies");
const rentals = require("../routes/rentals");
const users = require("../routes/users");
const auth = require("../routes/auth");
const returns = require("../routes/returns");
const cors = require("cors");

module.exports = function (app) {
  app.use(cors());
  app.use(express.json());
  app.use("/api/genres", genres);
  app.use("/api/customers", customers);
  app.use("/api/movies", movies);
  app.use("/api/rentals", rentals);
  app.use("/api/users", users);
  app.use("/api/logins", auth);
  app.use("/api/returns", returns);
  app.use("/home", (req, res) => {
    res.render("index.pug", { test: "Welcome to Homepage!" });
  });

  app.use("/customers", customers);
  app.use("/addCustomer", (req, res) => {
    res.render("addCustomer.pug");
  });

  app.use(error);
};
