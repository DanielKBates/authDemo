const db = require("../models");

module.exports = {
  findAllTests: async function (req, res) {
    try {
      const data = await db.TestModel.find({});
      res.json(data);
    } catch (err) {
      res.json({ message: err.message });
    }
  },

  createTest: async function (data, res) {
    try {
     
      const dbResponse = await db.TestModel.create(data);
      console.log(dbResponse);
    } catch (err) {
      console.log(err);
    }
  },
};
