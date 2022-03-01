const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")

router.post("/createBooks", UserController.createBook )////////1

router.get("/bookList", UserController.getBookList)//////////////2

router.post("/booksInYear", UserController.getBooksInYear )///////////3

router.post("/getParticularBooks", UserController.getParticularBooks )///////////4

router.get("/getXINRBooks", UserController.getXINRBooks)///////////////////5

router.get("/getRandomBooks", UserController.getRandomBooks )////////////////6

module.exports = router;