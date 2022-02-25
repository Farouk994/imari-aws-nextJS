const express = require("express");
const {
   createOrder,
   updateOrder,
   deleteOrder,
   getAllOrders,
   getUserOrders,
   getMonthlyOrders,
} = require("../controllers/order");
const {
   verifyToken,
   verifyTokenAdmin,
   verifyTokenAuthorization,
} = require("../middleware/verifyToken");
const router = express.Router();

router.post("/order/new/", verifyToken, createOrder);

router.put("/order/update/:id", verifyTokenAdmin, updateOrder);

router.delete("/order/delete/:id", verifyTokenAdmin, deleteOrder);

router.get("/order/get/all", verifyTokenAdmin, getAllOrders);

router.get("/order/user/:id", verifyTokenAuthorization, getUserOrders);

router.get("/order/monthly/income", verifyTokenAdmin, getMonthlyOrders);

module.exports = router;
