const Product = require("../models/Product");

// Add Product
const addProduct = async (req, res) => {
   const product = new Product(req.body);
   try {
      const savedProduct = await product.save();
      res.status(200).json(savedProduct);
   } catch (err) {
      console.log(err);
      res.status(500).send("Server Error");
   }
};

// Get ProductById
const getProductById = async (req, res) => {
   try {
      const product = await Product.findById(req.params.id);
      res.status(200).json(product);
   } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error");
   }
};

// Get All Products
const getAllProducts = async (req, res) => {
   const qNew = req.query.new;
   const qCategory = req.query.category;
   try {
      let products;

      if (qNew) {
         products = await Product.find().sort({ createdAt: -1 }).limit(1);
      } else if (qCategory) {
         products = await Product.find({
            categories: {
               $in: [qCategory],
            },
         });
      } else {
         products = await Product.find();
      }

      res.status(200).json(products);
   } catch (err) {
      res.status(500).json(err);
   }
};

// Update Product
const updateProduct = async (req, res) => {
   try {
      const product = await Product.findByIdAndUpdate(
         req.params.id,
         {
            $set: req.body,
         },
         { new: true }
      );
      if (!product) return res.status(400).send("Item wasn't found, try again");
      res.status(200).json(product);
   } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error");
   }
};

// Delete Product
const deleteProduct = async (req, res) => {
   try {
      const product = await Product.findOneAndDelete(req.params.id);
      if (!product) return res.status(400).send("Product not Found, try Again");
      res.status(200).send("Product has now been Deleted");
   } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error");
   }
};

module.exports = {
   addProduct,
   deleteProduct,
   updateProduct,
   getAllProducts,
   getProductById,
};
