const express = require('express');
const router = express.Router();

const userController= require("../controllers/userController")
const productController= require("../controllers/productController")
const orderController= require("../controllers/orderController")


const checkMiddleware = function(req,res,next)
{
    let header=req.headers.isfreeappuser
    //console.log(header)
    if(header===undefined)
    {
       return res.send("request is missing a mandatory header")
    }
   
    next();
}

router.post("/createUser", checkMiddleware, userController.createUser  )

router.post("/createProduct", productController.createProduct  )

router.post("/createOrder", checkMiddleware, orderController.createOrder  )


module.exports = router;