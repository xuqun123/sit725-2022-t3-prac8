require("dotenv").config();

// mongoDB connection
const mongoClient = require("mongodb").MongoClient;

// add database connection
const uri =
  "mongodb+srv://xuqu:sit725@cluster0.cceyz2x.mongodb.net/?retryWrites=true&w=majority";
const client = new mongoClient(uri, { useNewUrlParser: true });

client.connect((err, db) => {
  if (!err) {
    console.log("MongoDB connected");
  } else {
    console.log("MongoDB connection error");
    process.exit(1);
  }
});

module.exports = client;
