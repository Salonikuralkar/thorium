const jwt = require("jsonwebtoken");


const authenticationUser=function(req,res,next)
{
    let token = req.headers["x-auth-token"];
    if (!token) return res.send({ status: false, msg: "token must be present" });

 let decodedToken = jwt.verify(token, "functionup-thorium");//verifying token with secret key
 console.log(decodedToken)

  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });//validating token value inside decodedToken

  next();
}

module.exports.authenticationUser = authenticationUser;