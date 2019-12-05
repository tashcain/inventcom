const mongoose = require('mongoose');

const StockSchema = mongoose.Schema({
    comId:{
        type:String
    },
    comName:{
        type:String
    },
   prodName:{
    type:String
   },
      Color:{
        type:String
      },
   Category:{
    type:String
   },
    Gender :{
        type:String
    },
       Size:{
        type:String
       },
   location:{
    type:String
   },
    status:{
        type:Number,
        default:0
    }
})
    

module.exports = mongoose.model('Stock', StockSchema);