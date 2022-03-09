const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const userMiddleware=require("../middleware/authentication")

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)


router.get("/users/:userId", userMiddleware.authenticationUser, userController.getUserData)

router.put("/users/:userId", userMiddleware.authenticationUser, userController.updateUser)

router.post("/users/:userId/post",userMiddleware.authenticationUser,userMiddleware.authorisationUser,userController.postMessage)

router.delete("/users/:userId", userMiddleware.authenticationUser, userController.updateIsDelete)

module.exports = router;