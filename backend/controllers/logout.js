



let getLogout = async (req,res)=>{
    res.clearCookie('userid', {path:'/'});
    res.send({Message:"Logged Out", status:200})
}


export { getLogout } ;