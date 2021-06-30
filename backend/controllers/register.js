import user from "../models/user.js";   
import bcrypt from "bcrypt";


let postRegister= async (req,res,next)=>{
    const{name,penno,mob,degn,glno,dt,password}=req.body;
    
    // //Password Encription //
    const salt = await bcrypt.genSalt(10)
    const hashedPasswd = await bcrypt.hash(password, salt)
    try {
        const newUser =await user.create({
            name,
            penno,
            mob,
            degn,
            glno,
            hashedPasswd,
            dt 
        });

        res.status(200).json({
            success:true,
            user
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            error: error.message 
        })
        
    }
}

let getRegister =  async (req,res)=>{
    await user.find({},(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    });
}

export { postRegister, getRegister };
