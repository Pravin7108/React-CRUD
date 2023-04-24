const mongoose=require("mongoose");

const People=mongoose.Schema({
    name:{
        type:String,
    },
    age:{
        type:String,
    },
    email:{
        type:String,
    }
});

module.exports=mongoose.model("details",People);