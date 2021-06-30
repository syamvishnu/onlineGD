import appdata from "../models/appdata.js";

let postHome = async (req,res,next)=>{
    const{title,message,dt,gdname,gno}=req.body;
    
    try {
        const newData =  new appdata({
            title,
            message,
            dt,
            gno,
            gdname
        });

        await newData.save();
        
        res.status(200).json({
            success:true,
             appdata
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            error: error.message 
        })
    }
};


let getHome =  async (req,res)=>{
    // console.log(req.session.user)
    await appdata.find({},(err,result)=>{
        if(err){
            res.send(err)
        }else{
            // console.log(req.session.user);
            res.send(result)
        }
    });
} 

export {postHome, getHome};



