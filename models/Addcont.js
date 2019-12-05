const mongoose = require('mongoose');

const AddconSchema =mongoose.Schema({
   ContactType:{
       type: String,
       required:true
   },
   something:{
       type:String,
       required: true
   }

})

module.exports = mongoose.model('Addcon', AddconSchema);

