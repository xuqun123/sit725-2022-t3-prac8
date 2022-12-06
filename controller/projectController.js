let projectModel = require("../models/project");

// create project
const createProject = (req, res) => {
  const newProject = req.body;
  console.log("A new preoject is added:", newProject);
  projectModel.insertProjects(newProject, (err, result) => {
    if (err) {
      res.json({ statusCode: 400, message: err });
    } else {
      res.json({ statusCode: 200, data: result, message: "Success" });
    }
  });
};

// retrieve project
const retrieveProject = (req, res) => {
  projectModel.getProjects((err, result) => {
    if (err) {
      res.json({ statusCode: 400, message: err });
    } else {
      res.json({ statusCode: 200, data: result, message: "Success" });
    }
  });
};

module.exports = { retrieveProject, createProject };
