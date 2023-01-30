const { ObjectId } = require("mongodb");
const { getDb } = require("../utils/dbConnection");

// add a new bill
module.exports.newBilling = async (req, res) => {
  try {
    const db = getDb();
    const billings = db.collection("billings");
    const billing = req.body.data;
    const result = await billings.insertOne(billing);

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
  } catch (error) {
    console.log(error.message);
  }
};

// get bill with pagination
module.exports.getBilling = async (req, res) => {
  try {
    const db = getDb();
    const billings = db.collection("billings");
    const queries = {};

    const { page, limit } = req.query;
    const skip = parseInt(page - 1) * parseInt(limit);
    queries.skip = skip;
    queries.limit = parseInt(limit);

    const result = await billings
      .find({})
      .skip(queries.skip)
      .limit(queries.limit)
      .toArray();

    if (result) {
      res.status(200).json({
        status: true,
        message: "Data load success",
        data: result,
      });
    } else {
      res.status(400).json({
        status: false,
        message: "Data is not loaded success",
        data: result,
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

// delete bill
module.exports.deleteBilling = async (req, res) => {
  try {
    const db = getDb();
    const billings = db.collection("billings");

    const { id } = req.params;
    const result = await billings.deleteOne({ _id: ObjectId(id) });
    console.log(result);
    if (result) {
      res.status(200).json({
        status: true,
        message: "Data Delete success",
        data: result,
      });
    } else {
      res.status(400).json({
        status: false,
        message: "Data is not Delete success",
        data: result,
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};
