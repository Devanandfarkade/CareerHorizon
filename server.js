//imports
//const express = require("express");
import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import path from "path";
import { fileURLToPath } from "url";

//config
dotenv.config();

connectDB();

//rest object
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));

//routes
app.get("/", (req, res) => {
  res.sendFile(__dirname, "public", "index.html");
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
