const mongoose = require('mongoose');

const TestSchema = mongoose.Schema({
    
    
    productId:{
        type:String
    },
    deliveryLocation:{
        type:String
    },
    phoneNo:{
        type:Number
    },
    paymentMode:{
        type:String
    },
    price:{
        type:Number
    },
    barcode:{
        type:String
    },
    status:{
        type:Number,
        default:0
    }
   

   
})

module.exports = mongoose.model('Test', TestSchema);