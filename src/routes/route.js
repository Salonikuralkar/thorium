const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController= require("../controllers/publisherController")

router.post("/createAuthor", authorController.createAuthor  )

router.post("/createPublisher", publisherController.createPublisher  )

router.post("/createBooks", bookController.createBooks  )

router.get("/getBooks", bookController.getBooksWithAuthorAndPublisherDetails  )

router.put("/books", bookController.getBooksFindAndUpdate)

module.exports = router;