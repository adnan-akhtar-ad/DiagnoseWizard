const mongoose = require("mongoose");
const app = require("./app");
const express=require("express");
const dotenv = require("dotenv");
const helmet=require("helmet");
var cors = require('cors')


dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE;

mongoose
  .connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("database connection established");
  });

// app.use(cors({
//   origin: 'http://localhost:5173'
// }));
// app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
// app.use(express.urlencoded({ extended: true })); // Handle form data
// app.use(cors({
//   origin: 'http://localhost:5173',
//   credentials: true,
//   optionsSuccessStatus: 204,
// }));
// app.use(express.static('public'));


const port = 3000;
app.listen(port, () => {
  console.log("listening on port 3000");
});
