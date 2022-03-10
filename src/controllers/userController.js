const res = require("express/lib/response");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  try{
      let data = req.body;//data will be object
      if(Object.keys(data).length === 0)//if data is empty object=> truthy value 
        {
          return res.status(400).send({msg:"please enter the required data"})
        }
           let savedData = await userModel.create(data);
          return  res.status(201).send({ msg: savedData });             
  }
  catch(error)
    {
       res.status(500).send({Error:error.message})
    }
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const loginUser = async function (req, res) {
  try{
  let userName = req.body.emailId;//extracted emailId in userName from body 
  let password = req.body.password;//extracted passwordd in password from body
//validating emailId and password which is entered by user with the DB collection of user
if(!userName || !password)
{
  return res.status(400).send({msg:"username and password must be present"})
}
  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.status(400).send({
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

  return res.status(201).send({ status: true, data: token });
}
catch(error)
{
  res.status(500).send({Error:error.message})
}
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const getUserData = async function (req, res) {
  try{  
  let userId = req.params.userId;
  if(!userId)
  {
    return res.status(400).send({msg:"user Id not present"})
  }
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.status(404).send({ status: false, msg: "No such user exists" });

  res.status(200).send({ status: true, data: userDetails });
}
catch(error)
{
  res.status(500).send({Error:error.message})
}
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const updateUser = async function (req, res) {
  try{
  let userId = req.params.userId;
 
  if(!userId)
  {
    return res.status(400).send({msg:"user Id not present"})
  }
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.status(404).send("No such user exists");
  }
  let userData = req.body;
  if(userData)
  {
    return res.status(400).send({msg:"Please provide User Data"})
  }
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData,{new:true});
  return res.status(201).send({ status: true, data: updatedUser });
}
catch(error)
{
  return res.status(500).send({Error:error.message})
}
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////
const postMessage=async function(req, res){
  try{
 let userId=req.params.userId;
 if(!userId)
  {
    return res.status(400).send({msg:"user Id not present"})
  }
let user=await userModel.findById(userId);
if(!user) return res.status(404).send({status:false,msg:"No such user exists"})
let updatedPosts=user.posts;

let message=req.body.message;
if(!message)
  {
    return res.status(400).send({msg:"user Id not present"})
  }
updatedPosts.push(message)
let updatedData= await userModel.findOneAndUpdate({_id:userId},{$set:{posts:updatedPosts}},{new:true});

if(!updatedData)
  {
    return res.status(400).send({msg:"Data not found"})
  }
return res.status(201).send({status:true,msg:{updatedData}}) 
}
catch(error)
{
  return res.status(500).send({Error:error.message})
} 
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////
const updateIsDelete = async function (req, res) {
  try{
  let user=req.params.userId; 
  if(!user)
  {
    return res.status(400).send({msg:"user Id not present"})
  }
  let updatedUser = await userModel.findOneAndUpdate({ _id: user }, {$set:{isDeleted:true}}, {new:true});

  if(!updatedUser)
  {
    return res.status(400).send({msg:"Data not found"})
  }
  return res.status(201).send({ status: true, data: updatedUser });
}
catch(error)
{
 return res.status(500).send({Error:error.message})
}

};


module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.postMessage = postMessage;
module.exports.updateIsDelete = updateIsDelete;
