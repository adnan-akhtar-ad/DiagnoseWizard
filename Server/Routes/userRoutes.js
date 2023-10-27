const express = require("express");
const userController = require('./../Controllers/userController');
const authController = require('./../Controllers/authController');
const router = express.Router();
const fs = require("fs");

const morgan = require("morgan");
const app = express();
app.use(express.json());
app.use(morgan("dev"));
router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.route("/").get(userController.getAllUsers).post(userController.createUser);

router.route("/:id").get(userController.getUniqueUser).patch(userController.updateUser).delete(userController.deleteUser);

module.exports = router;
