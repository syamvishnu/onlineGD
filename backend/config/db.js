import mongoose from "mongoose";

const connectDB = async ()=>{
    await mongoose.connect(process.env.MONGO_URI,{
        useCreateIndex:true,
        useNewUrlParser:true,
        useUnifiedTopology:true ,
        useFindAndModify:true    
    }).then(()=>console.log("DB Connected"))
    .catch(err=>console.log(err));
}

export default connectDB;