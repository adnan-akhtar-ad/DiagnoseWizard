const express = require("express");
const morgan = require("morgan");
const userRouter = require("./Routes/userRoutes");
var cors = require('cors')

const app = express();
app.use(express.json());

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());
app.use(morgan("dev"));

app.use("/", userRouter);

module.exports = app;
