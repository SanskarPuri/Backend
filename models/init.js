const mongoose= require("mongoose");

let courseSchema=new mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        instructor:{
            type:String,
            required:true
        },
        duration:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required: true
        },
        img:{
            type:String,
            required:true
        }
    }
);

module.exports=mongoose.model("Course",courseSchema);