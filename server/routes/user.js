const express = require("express");
const {
   updateUser,
   deleteUser,
   getUser,
   getAllUsers,
   getUserStats,
} = require("../controllers/user");
const {
   verifyTokenAuthorization,
   verifyTokenAdmin,
} = require("../middleware/verifyToken");
const router = express.Router();

router.get("/user/find/:id", verifyTokenAdmin, getUser);

router.get("/user/all", getAllUsers);

router.put("/user/:id", updateUser, verifyTokenAuthorization);

router.delete("/user/:id", deleteUser, verifyTokenAuthorization);

router.get("/user/stats/", verifyTokenAdmin, getUserStats);

module.exports = router;
