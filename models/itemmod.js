const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
    name:{
        type:String
    },
    age:{
        type:String
    }
})

module.exports= mongoose.model('Items', ItemSchema);