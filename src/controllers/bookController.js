const { count } = require("console")
const { find } = require("../models/authorModel")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel= require("../models/publisherModel")


const createBooks= async function (req, res) {
    let book = req.body
    //res.send({book})      
    let  userId= book.author
    let aID= await authorModel.findById(userId)
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

const getBooksFindAndUpdate = async function (req, res) {
  let publisherId= await publisherModel.find({name:{$in:["HarperCollins", "Penguin"]}}).select({_id:1})
  let arr=[]
  arr=publisherId.map(e=>e._id)
 let data= await bookModel.updateMany(
   {publisher:{$in:arr}},
    {$set:{isHardCover:true}},
    {new:true}) 
   /////////////////////////////////5a
   let authorId= await authorModel.find({ratings:{$gt:3.5}}).select({_id:1})
   let array=[]
   array=authorId.map(e=>e._id)
   let book= await bookModel.updateMany(
    {author:{$in:array}},
     {$inc:{price:+10}},
     {new:true})  
    /////////////////////////////5b
    let specificBook = await bookModel.find()
     res.send(specificBook)




    
 
}




module.exports.createBooks= createBooks
module.exports.getBooksWithAuthorAndPublisherDetails= getBooksWithAuthorAndPublisherDetails
module.exports.getBooksFindAndUpdate= getBooksFindAndUpdate