const mongoose=require('mongoose');
const ObjectId=mongoose.Schema.Types.ObjectId;
const orderSchema = new mongoose.Schema({
    userID: {
        type: ObjectId,
        ref: "NewUser"
    }, 
    productID: {
        type: ObjectId,
        ref: "Product"
    }, 
    amount: Number,
isFreeAppUser: Boolean,
date: Date,
});
module.exports = mongoose.model('Order', orderSchema) 

