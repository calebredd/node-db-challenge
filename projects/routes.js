const express = require("express"),
  db = require("../data/db-helpers"),
  router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to the Projects Backend Server");
});
router.get("/api", (req, res) => {
  res.send("Welcome to the Projects API");
});
router.get("/api/projects", (req, res) => {
  db.find()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(() => {
      res.status(500).json({ errorMessage: "Unable to access database" });
    });
});

module.exports = router;
