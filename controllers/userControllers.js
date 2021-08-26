const db = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  handleGoogle: async function (req, res) {
    try {
      const {
        email,
        googleId: id,
        familyName: lastName,
        givenName: firstName,
      } = req.body.result;
      const existing = await db.User.findOne({ id });

      if (existing) return existing;
      else {
        const newlyCreatedUser = await db.User.create({
          email,
          id,
          lastName,
          firstName,
        });
        console.log(newlyCreatedUser);
      }
    } catch (error) {
      console.log(error);
    }
  },

  login: async function (req, res) {
    const { email, password } = req.body;
    try {
      // check for db record for existing user
      const existingUser = await db.User.findOne({ email });
      //   exit function if not existing user in db
      if (!existingUser) {
        return res.status(404).json({ message: "User not found" });
      }

      const isPasswordMatch = await bcrypt.compare(
        password,
        existingUser.password
      );
      if (!isPasswordMatch)
        return res.status(400).json({ message: "invalid credentials." });

      const token = jwt.sign(
        { email: existingUser.email, id: existingUser._id },
        "test",
        { expiresIn: "1h" }
      );

      res.status(200).json({ result: existingUser, token });
    } catch (error) {
      console.log(error);
    }
  },

  signup: async function (req, res) {
    const { email, password, firstName, lastName } = req.body;
    try {
      const existingUser =await  db.User.findOne({ email:email  });
      if (existingUser) {
        return res.status(404).json({ message: "user already exists" });
      }
      const hashedPassword = await bcrypt.hash(password, 12);
      const result = await db.User.create({
        email,
        password: hashedPassword,
        firstName,
        lastName,
      });
      const token = jwt.sign({ email: result.email, id: result._id }, "test", {
        expiresIn: "1h",
      });
      res.status(200).json({result, token})
    } catch (error) {
      console.log(error);
    }
  },
};
