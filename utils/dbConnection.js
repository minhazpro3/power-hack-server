const { MongoClient } = require("mongodb");
require("dotenv").config();
const connectionString = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.z45ex.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let dbConnection;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      if (err || !db) {
        return callback(err);
      }

      dbConnection = db.db("power_hack-bill");
      console.log("Successfully connected to ");

      return callback();
    });
  },

  getDb: function () {
    return dbConnection;
  },
};
