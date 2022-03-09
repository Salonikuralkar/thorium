const jwt = require("jsonwebtoken");


const authenticationUser=function(req,res,next)
{
    let token = req.headers["x-auth-token"];
    if (!token) return res.send({ status: false, msg: "token must be present" });

 let decodedToken = jwt.verify(token, "functionup-thorium");//verifying token with secret key
 //console.log(decodedToken)

  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });//validating token value inside decodedToken

  next();
}

const authorisationUser=function(req,res,next)
{
  let token = req.headers["x-auth-token"];

  let decodedToken = jwt.verify(token, "functionup-thorium");

  let authorisedUser=decodedToken.userId;
  let logedInUser=req.params.userId;
  // console.log(authorisedUser,logedInUser);
  // console.log(typeof(authorisedUser),typeof(logedInUser));
  if(authorisedUser!==logedInUser) return res.send({status:false,msg:"You are not an authorized person to make these changes"})
  
  next();

}

module.exports.authenticationUser = authenticationUser;

module.exports.authorisationUser = authorisationUser;