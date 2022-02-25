const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { readdirSync } = require("fs");

require("dotenv").config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
   cors({
      origin: ["http://localhost:3000"],
   })
);

readdirSync("./routes").map((r) => {
   app.use("/api", require(`./routes/${r}`));
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
   console.log(`Listening to PORT ${PORT}`);
});

mongoose
   .connect(process.env.DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
   })
   .then(() => {
      console.log("DB has been connected");
   })
   .catch((err) => {
      console.log(err.message, "Connection failed");
   });
