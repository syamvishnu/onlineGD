import bcrypt from "bcrypt";
import user from "../models/user.js";




let login = async (req,res,next)=>{

    const {penno,password}=req.body;
    if (!penno || !password){
        res.send({status:404, message:"No PEN No. & Password"})
    }
    var query = {penno:penno}
    await user.find(query, function(err, doc){
        if( err){
            res.send({message:"Invalied cridetionals", status:401})
        }
      }) 
    let user1= await user.findOne({penno:penno}).select("+hashedPasswd");
    if(user1){

        bcrypt.compare(password,user1.hashedPasswd).then((status)=>{
            if(status){
                req.session.user = user1;
                res.send({message:"Success", status:200 })
  
            }else{
                res.send({message:"Wrong Password", status:401})
            }
        })

    }else{
        res.send({message:"No User Found", status:404})
    }
}


let getLogin =  async (req,res)=>{
    if(req.session.user){
        res.send({loggedin: true, user: req.session.user});
    }else{
        res.send({loggedIn: false })
    } 
}


export { login, getLogin };


