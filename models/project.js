let client = require("../dbConnect");
let projectCollection;

setTimeout(() => {
  projectCollection = client.db().collection("Pets");
});

const insertProjects = (project, callback) => {
  projectCollection.insertOne(project, callback);
};

const getProjects = (callback) => {
  projectCollection.find({}).toArray(callback);
};

module.exports = { insertProjects, getProjects };
