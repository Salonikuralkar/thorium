const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  let data = req.body;
  let savedData = await userModel.create(data);
  //console.log(req.newAtribute);
  res.send({ msg: savedData });
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const loginUser = async function (req, res) {
  let userName = req.body.emailId;//extracted emailId in userName from body 
  let password = req.body.password;//extracted passwordd in password from body
//validating emailId and password which is entered by user with the DB collection of user
  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not corerct",
    });

    let token = jwt.sign(
    {
      userId: user._id.toString(),//extracting id from user variable defined above and converting it to string
      batch: "thorium",
      organisation: "FUnctionUp",
    },
    "functionup-thorium"
  );//Here in sign function we have generated token.

  res.setHeader("x-auth-token", token);//setting header(key-value pair)in headers of response, 
  //Here:#key is such that it is recognized by both frontend and backend ,
  // and token is #value which is generated above in sign method/function

  res.send({ status: true, data: token });
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const getUserData = async function (req, res) {
  
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const updateUser = async function (req, res) {
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.send("No such user exists");
  }
  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData,{new:true});
  res.send({ status: true, data: updatedUser });
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////
const postMessage=async function(req, res){
 let userId=req.params.userId;
let user=await userModel.findById(userId);
if(!user) return res.send({status:false,msg:"No such user exists"})

let updatedPosts=user.posts;
let message=req.body.message;
updatedPosts.push(message)
let updatedData= await userModel.findOneAndUpdate({_id:userId},{$set:{posts:updatedPosts}},{new:true});
res.send({status:true,msg:{updatedData}})  
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////
const updateIsDelete = async function (req, res) {
  let user=req.params.userId; 
  let updatedUser = await userModel.findOneAndUpdate({ _id: user }, {$set:{isDeleted:true}}, {new:true});
  res.send({ status: true, data: updatedUser });

};
module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.postMessage = postMessage;
module.exports.updateIsDelete = updateIsDelete;
