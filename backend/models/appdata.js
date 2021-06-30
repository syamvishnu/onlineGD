import mongoose from "mongoose";

const appSchema= new mongoose.Schema({
    title:{
        type:String,
        require:[true, "Please provide a Title"]
    },
    message:{
        type:String,
        require:[true, "Please type Message"]
    },
    dt:{ type : Date, default: Date.now },

    gdname: String,

    gno:Number,

    designation:String,
})

const appdata = mongoose.model("appdata", appSchema)

export default appdata;