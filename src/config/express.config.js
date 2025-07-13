const express = require("express");
const app = express();
const router = require("./router.config");

// parsers body
//json
app.use(express.json());
// x-www-form-urlencoded
app.use(express.urlencoded());

//static middleware
app.use("/assets", express.static("./public/uploads/"));

//form-data

//mounting or loading
// path => /
app.use("/api/v1/", router);

// 404 route //This block catches any route that doesn't exist (e.g., user goes to /wrong-url).
app.use((req, res, next) => {
  //content
  next({
    code: 404,
    message: "Resource not found...",
    status: "NOT_FOUND_ERR",
  });
});

// Error handling middleware
//mathi ko next ({}) yo tala ko "error" ma aaye ra basxa.
app.use((error, req, res, next) => {
  // console.log("garbage Collector: ", error);
  let statusCode = error.code || 500;
  let details = error.details || null;
  let msg = error.message || "Internal Server Error";
  let status = error.status || "SERVER_ERROR";

  res.status(statusCode).json({
    error: details,
    message: msg,
    status: status,
    options: null,
  });
});
module.exports = app;
