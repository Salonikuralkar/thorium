const mongoose = require('mongoose');

const newAuthor = new mongoose.Schema( {
   
    authorName: String,
    age:Number,
    address:String

}, );

module.exports = mongoose.model('NewAuthors', newAuthor)
