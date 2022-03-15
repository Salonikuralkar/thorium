const express = require('express');
const router = express.Router();
const AuthorController=require("../controller/authorController")
const BlogsController=require("../controller/blogController")


router.post("/authors",AuthorController.createAuthor )

router.post("/blogs",BlogsController.createBlogs )

router.get("/blogs",BlogsController.getBlogs)

router.put("/blogs/:blogId", BlogsController.updateBlogs)

router.delete("/blogs/:blogId", BlogsController.deleteBlogById)

router.delete("/blogs",BlogsController.deleteBlogByQueryParams)


module.exports = router;
