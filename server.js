var express = require("express");
var app = express();
var cors = require("cors");
let projectCollection;
let dbConnect = require("./dbConnect");
let projectRoutes = require("./routes/projectRoutes");

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use("/api/projects", projectRoutes);

// const createCollection = (collectionName) => {
//   client.connect((err, db) => {
//     projectCollection = client.db().collection(collectionName);

//     if (!err) {
//       console.log("MongoDB connected");
//     } else {
//       console.log("MongoDB connection error");
//       process.exit(1);
//     }
//   });
// };

// const insertProjects = (project, callback) => {
//   projectCollection.insertOne(project, callback);
// };

// const getProjects = (callback) => {
//   projectCollection.find({}).toArray(callback);
// };

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

// app.get("/api/projects", (req, res) => {
//   getProjects((err, result) => {
//     if (err) {
//       res.json({ statusCode: 400, message: err });
//     } else {
//       res.json({ statusCode: 200, data: result, message: "Success" });
//     }
//   });
// });

// app.post("/api/projects", (req, res) => {
//   const newProject = req.body;
//   insertProjects(newProject, (err, result) => {
//     console.log("A new project is added:", newProject);
//     if (err) {
//       res.json({ statusCode: 400, message: err });
//     } else {
//       res.json({ statusCode: 200, data: result, message: "Success" });
//     }
//   });
// });

var port = process.env.port || 3000;

app.listen(port, () => {
  console.log("App listening to: " + port);
  // createCollection("Pets");
});
