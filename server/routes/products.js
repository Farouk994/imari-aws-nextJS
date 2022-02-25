const express = require("express");
const {
   addProduct,
   updateProduct,
   getAllProducts,
   getProductById,
   deleteProduct,
} = require("../controllers/product");
const { verifyTokenAdmin } = require("../middleware/verifyToken");
const router = express.Router();

router.post("/product/new", verifyTokenAdmin, addProduct);

router.put("/product/update/:id", verifyTokenAdmin, updateProduct);

router.get("/product/all", getAllProducts);

router.get("/product/:id", getProductById);

router.delete("/product/delete/:id", verifyTokenAdmin, deleteProduct);

module.exports = router;
