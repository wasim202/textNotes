const express = require("express");
const noteRoutes = require("./noteRoutes");
//const uuid = require("./helpers/uuid");

const app = express();

app.use("./notes", noteRoutes);

module.exports = app;
