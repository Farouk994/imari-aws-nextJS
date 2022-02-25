const Order = require("../models/Order");

const createOrder = async (req, res) => {
   const newOrder = new Order(req.body);
   try {
      const savedOrder = await newOrder.save();
      res.status(200).json(savedOrder);
   } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error");
   }
};

const updateOrder = async (req, res) => {
   try {
      const order = await Order.findByIdAndUpdate(
         req.params.id,
         {
            $set: req.body,
         },
         { new: true }
      );
      res.status(200).json(order);
   } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error");
   }
};

const deleteOrder = async (req, res) => {
   try {
      const order = await Order.findByIdAndDelete(req.params.id);
      if (!order) return res.status(400).send("Order not available, try again");
      res.status(200).json("Order has been deleted");
   } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error");
   }
};

const getAllOrders = async (req, res) => {
   try {
      const orders = await Order.find();
      res.status(200).send(orders);
   } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error");
   }
};

const getUserOrders = async (req, res) => {
   try {
      const orders = await Order.find({ userId: req.params.userId });
      if (!orders) res.status(400).send("There are no orders for this user.");
      res.status(200).json(orders);
   } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error");
   }
};

const getMonthlyOrders = async (req, res) => {
   const date = new Date();
   const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
   const previousMonth = new Date(
      new Date(new Date().setMonth(lastMonth.getMonth() - 1))
   );

   try {
      const income = await Order.aggregate([
         {
            $match: { createdAt: { $gte: previousMonth } },
         },
         {
            $project: {
               month: { $month: "$createdAt" },
               sales: "$amount",
            },
         },
         {
            $group: {
               _id: "$month",
               total: { $sum: "$sales" },
            },
         },
      ]);
      res.status(200).json(income);
   } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error");
   }
};

module.exports = {
   createOrder,
   updateOrder,
   deleteOrder,
   getAllOrders,
   getUserOrders,
   getMonthlyOrders,
};
