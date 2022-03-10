
const jwt = require("jsonwebtoken");


const authenticationUser=function(req,res,next)
{
  try {
    let token = req.headers["x-auth-token"];
    if (!token) return res.status(400).send({ status: false, msg: "token must be present" });

 let decodedToken = jwt.verify(token, "functionup-thorium");//verifying token with secret key
 //console.log(decodedToken)

  if (!decodedToken)
    return res.status(400).send({ status: false, msg: "token is invalid" });//validating token value inside decodedToken

  next();
  
}
catch(error)
{
  res.send({msg:error.message})
}
}

const authorisationUser=function(req,res,next)
{
  try {
  let token = req.headers["x-auth-token"];

  let decodedToken = jwt.verify(token, "functionup-thorium");

  let authorisedUser=decodedToken.userId;
  let logedInUser=req.params.userId;
  // console.log(authorisedUser,logedInUser);
  // console.log(typeof(authorisedUser),typeof(logedInUser));
  if(authorisedUser!==logedInUser) return res.status(401).send({status:false,msg:"You are not an authorized person to make these changes"})
  next();  
}
catch(error)
{
  return res.send({msg:error.message})
}
}
module.exports.authenticationUser = authenticationUser;

module.exports.authorisationUser = authorisationUser;
