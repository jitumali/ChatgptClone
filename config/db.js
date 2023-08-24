const mongoose = require("mongoose");
const color = require("colors");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected To Mongodb Database ${mongoose.connection.host}`.bgGreen.white);
  } catch (error) {
    console.log(`Mongodb database Error ${error}`.bgRed.white);
  }
};

module.exports = connectDB;