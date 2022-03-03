const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const newBook = new mongoose.Schema( {
    name: String,
    author: {
        type: ObjectId,
        ref: "NewAuthors"
    },  
	
	price:Number,
	ratings:Number,
    isHardCover:{type:Boolean,
        default:false},
	publisher: {
            type: ObjectId,
            ref: "Publisher"
        },



}, { timestamps: true });


module.exports = mongoose.model('NewBooks', newBook)
