import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:[true, "Please provide a Username"]
    },
    
    penno:{
        type:Number,
        require:[true, "Please provide PEN Number"]
    },

    mob:{
        type:Number,
        require:[true, "Please provide Mobile Number"]
    },

    degn:{
        type:String,
        require:[true, "Please provide a Username"]
    },

    glno:{
        type:Number,
        require:[true, "Please provide GL. Number"]
    },
   
    hashedPasswd:{
        type:String,
        require:[true, "Please provide Password"],
        minlength:6,
        select:false

    },

    dt:{
        type:Date
    }
})



const user = mongoose.model("user", userSchema)

export default user; 
