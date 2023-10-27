const express = require("express");
const morgan = require("morgan");
const userRouter = require("./Routes/userRoutes");

const app = express();
app.use(express.json());

app.use(morgan("dev"));

app.use("/", userRouter);

module.exports = app;
