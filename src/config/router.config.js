const router = require("express").Router();

// prefix => /api/v1/
router.get("/", (req, res, next) => {
  res.json({
    data: "Health Check URL",
    message: "Success",
    status: "OK",
    options: null,
  });
});

module.exports = router;
