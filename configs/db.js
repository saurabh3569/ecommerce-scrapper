const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/ecommerce_scrapper");
    console.log("db connected");
  } catch (error) {
    console.log("failed to connect db", error);
  }
};

module.exports = connectDB;
