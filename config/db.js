require("dotenv").config();
const mongoose = require("mongoose");
require("colors"); // Import colors package

// Database configuration
const dbConfig = {
  uri: process.env.MONGO_URI, // Read from .env file
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(dbConfig.uri, dbConfig.options);
    console.log(" MongoDB Connected".green.bold);
  } catch (error) {
    console.error("Database Connection Error:".red.bold, error.message.red);
    process.exit(1);
  }
};

// Export connection function
module.exports = { connectDB, dbConfig };
