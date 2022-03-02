const { count } = require("console")
const { find } = require("../models/authorModel")
const AuthorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel= require("../models/publisherModel")


const createBooks= async function (req, res) {
    let book = req.body
    //res.send({book})      
    let  userId= book.author
    let aID= await AuthorModel.findById(userId)
    let userPub= book.publisher
    let pID= await publisherModel.findById(userPub)
    if((userId===null ) ||(userPub===null ))
    {
      return res.send("Error")
    }
   else if( (aID===null) || (pID===null) )
    {
       return res.send("Error")
    }
    else
    {
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
    }
  }  ////////////////////////////////////////////////////    
   
const getBooksWithAuthorAndPublisherDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate(['author','publisher'])
    res.send({data: specificBook})

}

module.exports.createBooks= createBooks
module.exports.getBooksWithAuthorAndPublisherDetails= getBooksWithAuthorAndPublisherDetails
