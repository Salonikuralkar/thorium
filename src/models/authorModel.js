const mongoose = require('mongoose');

const newAuthor = new mongoose.Schema( {
   
    authorName: String,
    age:Number,
    address:String,
    ratings:Number,

}, );

module.exports = mongoose.model('NewAuthors', newAuthor)
