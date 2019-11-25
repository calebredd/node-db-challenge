const express = require("express"),
  db = require("../data/db-helpers"),
  router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to the Projects Backend Server");
});
router.get("/api", (req, res) => {
  res.send("Welcome to the Projects API");
});

module.exports = router;
