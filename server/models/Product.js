const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
   {
      title: {
         type: String,
         required: true,
      },
      desc: {
         type: String,
         required: true,
      },
      categories: {
         type: Array,
         required: true,
      },
      size: {
         type: String,
      },
      color: {
         type: String,
      },
      price: {
         type: Number,
         required: true,
      },
      image: {
         type: String,
         // require: true,
      },
   },
   { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
