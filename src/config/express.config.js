const express = require("express");
const router = require("./router.config");
const app = express();

//mounting or loading
// path => /
app.use("/api/v1/", router);

module.exports = app;
