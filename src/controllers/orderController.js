const orderModel= require("../models/orderModel")
const productModel= require("../models/productModel")
const userModel= require("../models/userModel")

const createOrder= async function (req, res) {
let data= req.body

let uId= await userModel.findById(data.userId)///////validating user
let pId=await productModel.findById(data.productId)///////////vALIDATING Product

if(uId===null)/////if userID is returned null
{
   return  res.send("Error User not present ")
}
else if(pId===null)/////if productID is returned null
{
    return res.send("Error product is not available ")
}
else{
    let savedData= await orderModel.create(data)    

    let userStatus=req.headers.isfreeappuser;
//console.log(userStatus)
///////////////////////////////////////////////////////////////////////////////
///For free app user, we dont check user's balance and create the order with 0 amount.
    if(userStatus==="true")
        {
        let updatedOrder= await orderModel.findOneAndUpdate(
            {_id:savedData._id},{$set: {amount:0, isFreeAppUser:true}}, {new:true})
           return res.send({msg: updatedOrder})
        }
    else
        {
            let currentUser= await userModel.findById(uId)
            let currentProduct=await productModel.findById(pId)
 ///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////For paid user app and the user has sufficient balance. 
///////////We deduct the balance from user's balance and update the user. 
///////////We create an order document   
            if(currentUser.balance>=currentProduct.price)
            {
                let updatedOrder= await orderModel.findOneAndUpdate(
                    {_id:savedData._id},
                    {$set: {amount:currentProduct.price, isFreeAppUser:false}}, 
                    {new:true})
                let userUpdated= await userModel.findOneAndUpdate(
                    {_id:currentUser._id},
                    {$inc:{balance:-currentProduct.price}},{new:true}

                )
            res.send({msg: updatedOrder,userUpdated})
            }
  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////For paid app user and the user has insufficient balance.
  ////// We send an error that the user doesn't have enough balance
            else
            {
            res.send("user doesn't have enough balance")
            }

        }
}

}


module.exports.createOrder= createOrder
