const { ObjectId } = require("mongodb");
const { getDb } = require("../utils/dbConnection");

// add user
module.exports.addUser = async (req, res) => {
  try {
    const db = getDb();
    const users = db.collection("users");
    const newUser = req.body;

    const result = await users.insertOne(newUser);

    if (result.acknowledged) {
      res.status(200).json({
        status: true,
        message: "Data insert success",
        data: result,
      });
    } else {
      res.status(400).json({
        status: false,
        message: "Data is not insert success",
        data: result,
      });
    }
  } catch (error) {}
};

// get users

module.exports.getUser = async (req, res) => {
  try {
    const db = getDb();
    const users = db.collection("users");
    const result = await users.findOne({ email: req.params.email });

    if (result?.email) {
      res.status(200).json({
        status: true,
        message: "Data find success",
        data: result,
      });
    } else if (!result?.email) {
      res.status(400).json({
        status: false,
        message: "Data is not found success",
      });
    } else {
      res.status(400).json({
        status: false,
        message: "Data is not find  success",
        data: result,
      });
    }
  } catch (error) {}
};

// add job
module.exports.jobPost = async (req, res) => {
  try {
    const db = getDb();
    const users = db.collection("jobs");
    const result = await users.insertOne(req.body);

    if (result?.acknowledged) {
      res.status(200).json({
        status: true,
        message: "Data insert success",
        data: result,
      });
    } else {
      res.status(400).json({
        status: false,
        message: "Data is not insert  success",
        data: result,
      });
    }
  } catch (error) {}
};

// get jobs

module.exports.getJobs = async (req, res) => {
  try {
    const db = getDb();
    const users = db.collection("jobs");
    const result = await users.find({}).toArray();
    console.log(result);
    if (result) {
      res.status(200).json({
        status: true,
        message: "Data find success",
        data: result,
      });
    } else {
      res.status(400).json({
        status: false,
        message: "Data is not find  success",
        data: result,
      });
    }
  } catch (error) {}
};

module.exports.getJobsById = async (req, res) => {
  try {
    const db = getDb();
    const users = db.collection("jobs");
    const id = { _id: ObjectId(req.params.id) };
    const result = await users.findOne(id);
    console.log(result);
    if (result) {
      res.status(200).json({
        status: true,
        message: "Data find success",
        data: result,
      });
    } else {
      res.status(400).json({
        status: false,
        message: "Data is not find  success",
        data: result,
      });
    }
  } catch (error) {}
};
