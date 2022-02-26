const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String,
    authorName:  {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ["Fantasy-Fiction", "Non-fiction", "Fairy tale", "Inspirational-Fiction"] 
    },
    year: Number,
}, { timestamps: true });

module.exports = mongoose.model('Books', bookSchema) //users



// String, Number
// Boolean, Object/json, array