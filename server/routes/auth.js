const express = require("express");
const { registerUser, loginUser } = require("../controllers/auth");
const { updateUser } = require("../controllers/user");
const { verifyTokenAuthorization } = require("../middleware/verifyToken");
const router = express.Router();

router.post("/user/register", registerUser);

router.post("/user/login", loginUser);

router.put("/:id", updateUser, verifyTokenAuthorization);

module.exports = router;
