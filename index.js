const port = process.env.PORT || 5000;
const express = require("express");
const winston = require("winston");
const app = new express();

require("./startup/routes")(app);
require("./startup/db")();
require("./startup/logging")();
require("./startup/config")();
require("./startup/validation")();
require("./startup/prod")(app);

const pug = require("pug");

app.set("view-engine", "pug");
app.set("views", __dirname + "/views/");

const server = app.listen(port, () => {
  winston.log("info", `Server  is listening at ${port}...`);
});

module.exports = server;
