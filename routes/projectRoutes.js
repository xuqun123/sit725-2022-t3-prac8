var express = require("express");
var router = express.Router();
let projectController = require("../controller").projectController;

router.get("/", (req, res) => {
  projectController.retrieveProject(req, res);
});

router.post("/", (req, res) => {
  projectController.createProject(req, res);
});

module.exports = router;
