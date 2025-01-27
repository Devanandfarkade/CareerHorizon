//imports
//const express = require("express");
import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";

//config
dotenv.config();

connectDB();

//rest object
const app = express();

//routes
app.get("/", (req, res) => {
  res.send("<h1>Node Server running on port 8080</h1>");
});

//port
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
  console.log(
    `Node server running in ${process.env.DEV_MODE} mode on port no ${PORT}`
      .bgGreen.white
  );
});
