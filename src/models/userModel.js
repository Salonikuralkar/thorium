const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type: String,
        required: true
    },
    prices: {
        indianPrice:String,
        europePrice:String

    },
    year: {type: Number,
        default:2021},
    tags: [ String ],
    authorName:  String,
    totalPages: Number,
    isstockAvailable : Boolean,
}, { timestamps: true });

module.exports = mongoose.model('Books2', bookSchema) //users



// String, Number
// Boolean, Object/json, array