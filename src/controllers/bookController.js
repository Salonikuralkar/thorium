const { count } = require("console")
const BookModel= require("../models/bookModel")
const AuthorModel =require("../models/authorModel")

const createAuthors= async function (req, res) {
    let data= req.body
    let savedData= await AuthorModel.create(data)
    res.send({msg: savedData})
}////////////////////////////////////////////////////////author create
const createBooks= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}/////////////////////////////////////////////////////////book create

const getAuthorID= async function (req, res) {
    let author= await AuthorModel.find( {authorName : "Chetan Bhagat" }).select( { author_id:1,_id: 0});
   let id=author[0].author_id;
    let bookChetan=await BookModel.find({author_id:id}).select({bookName:1,_id:0})
    res.send({msg: bookChetan})///////////////////////////////////finding books of chetan bhagat
}
const getAuthorUpdatePrice= async function (req, res) {
    let data= await BookModel.findOneAndUpdate( 
        {bookName : "Two States"},
        {$set :{price:100}},
        {new: true});
        let id=data.author_id;        
        let cost=data.price;
       // res.send({id})
        let name=await AuthorModel.find({author_id:{$eq:id}}).select({authorName:1,_id:0})
        res.send({msg: name,cost})///////////////////////////////////finding bookname and update price
}

const getPrice= async function (req, res) {
    let authInfo= await BookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1,_id:0});
    // res.send({data})
    let data=authInfo.map(input=>input.author_id)
    let arr=[];
    for(let i=0;i<data.length;i++){    
        let a=data[i];
        let result= await AuthorModel.find({author_id:a}).select({authorName:1,_id:0})
        arr.push(result)
    }
    const author=arr.flat()
    
    res.send({msg: author})///////////////////////////////////finding author name
}
module.exports.createAuthors= createAuthors

module.exports.createBooks= createBooks

module.exports.getAuthorID= getAuthorID

module.exports.getAuthorUpdatePrice= getAuthorUpdatePrice


module.exports.getPrice= getPrice



