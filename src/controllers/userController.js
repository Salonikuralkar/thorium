const UserModel= require("../models/userModel")


const createBook= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})////////////////////1
}

const getBookList= async function (req, res) {
    let bookList= await UserModel.find().select({bookName:1, authorName:1,_id:0})
    res.send({msg: bookList})////////////////////////2
}
const getBooksInYear= async function (req, res) {
    let uYear= req.body.year;
    let bookYear= await UserModel.find({ year: { $eq: uYear } } )
    res.send({msg: bookYear})/////////////////////3
}
const getParticularBooks= async function (req, res) {
    let particular= req.body;
    let data= await UserModel.find(particular )
    res.send({msg: data})/////////////////////4
}
const getXINRBooks= async function (req, res) {
    let indianRupee= await UserModel.find({"prices.indianPrice":{$in:["100INR","200INR","500INR"]}})
    res.send({msg: indianRupee})////////////////////////5
}
//let samePriceBooks = await BookModel.find({$or: [{"prices.indianPrice":{$eq:"100INR"}},{"prices.indianPrice":{$eq:"200INR"}},{"prices.indianPrice":{$eq:"500INR"}}]});
const getRandomBooks = async function (req, res) {
    let pages= await UserModel.find({$or:[ {isstockAvailable: {$eq:true}}, {totalPages: { $gt:  500}} ] });
    res.send({msg: pages})////////////////////////6
}


module.exports.createBook= createBook
module.exports.getBookList= getBookList
module.exports.getBooksInYear= getBooksInYear
module.exports.getParticularBooks= getParticularBooks
module.exports.getXINRBooks= getXINRBooks
module.exports.getRandomBooks = getRandomBooks 


