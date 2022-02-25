const User = require("../models/User");

// Get User
const getUser = async (req, res) => {
   try {
      const user = await User.findById(req.params.id);
      const { password, ...info } = user._doc;
      res.status(200).json(info);
   } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error");
   }
};

// Get All Users
const getAllUsers = async (req, res) => {
   try {
      const user = await User.find();
      const { password, ...info } = user._doc;
      res.status(200).json(info);
   } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error");
   }
};

// Update User
const updateUser = async (req, res) => {
   try {
      const user = await User.findByIdAndUpdate(
         req.params.id,
         {
            $set: req.body,
         },
         { new: true }
      );
      res.status(200).json(user);
   } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error");
   }
};

// Delete User
const deleteUser = async (req, res) => {
   try {
      await User.findOneAndDelete(req.params.id);
      res.status(200).send("User has now Deleted");
   } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error");
   }
};

// Get User Stats
const getUserStats = async (req, res) => {
   const date = new Date();
   const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

   try {
      const data = await User.aggregate([
         { $match: { createdAt: { $gte: lastYear } } },
         {
            $project: {
               month: { $month: "$createdAt" },
            },
         },
         {
            $group: {
               _id: "$month",
               total: { $sum: 1 },
            },
         },
      ]);
      res.status(200).json(data);
   } catch (err) {
      console.log(err.message);
      res.status(500).send("Server ERROR");
   }
};

module.exports = { getUser, updateUser, deleteUser, getAllUsers, getUserStats };
