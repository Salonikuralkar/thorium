const userModel= require("../models/userModel")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await userModel.create(data)
    console.log(req.newAtribute)
    res.send({msg: savedData})
}


module.exports.createUser= createUser
