const User = require("../models/User");
const Crypto = require("crypto-js");

require("dotenv").config();

// Register User
const registerUser = async (req, res) => {
   const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: Crypto.AES.encrypt(
         req.body.password,
         process.env.PASSWORD_SECRET
      ).toString(),
   });
   //    if (!username) return res.status(400).send("Username is required");
   //    if (!password || password.length < 6)
   //       return res.status(400).send("Password should be 6 characters long");
   //    const exist = await User.findOne({ email });
   //    if (exist) return res.status(400).send("Email is already in use, try again");
   //    if (!email) return res.status(400).send("Email is required");
   try {
      const savedUser = await newUser.save();
      res.status(200).json(savedUser);
   } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error");
   }
};

// Login User
const loginUser = async (req, res) => {
   try {
      const user = await User.findOne({ username: req.body.username });
      if (!user) return res.status(400).send("Invalid Credentials, try Again");
      const hashedPassword = Crypto.AES.decrypt(
         user.password,
         process.env.PASSWORD_SECRET
      );
      const userPassword = hashedPassword.toString(Crypto.enc.Utf8);

      if (!userPassword)
         return res.status(400).send("Invalid Credentials, try again");

      const { password, ...info } = user._doc;

      res.status(200).json(info);
   } catch (err) {
      console.log(err);
      res.status(500).send("Server Error");
   }
};

module.exports = {
   registerUser,
   loginUser,
};
