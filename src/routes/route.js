const express = require('express');
const router = express.Router();

const BookController= require("../controllers/bookController")


router.post("/createAuthors", BookController.createAuthors)////////////create author

router.post("/createBooks", BookController.createBooks)/////////////create books

router.get("/getAuthorID", BookController.getAuthorID)/////////////getAuthorID and relevant books

router.get("/getAuthorUpdatePrice", BookController.getAuthorUpdatePrice)////////finding bookname and update price


router.get("/getPrice", BookController.getPrice)

module.exports = router;