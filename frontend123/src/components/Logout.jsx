import React, { useEffect } from 'react';
import {  useHistory } from "react-router-dom";
import axios from "axios";

function Logout() {

    const history = useHistory();
    useEffect(()=>{
        axios.get("http://localhost:3001/logout").then(res=>{
            localStorage.clear();    
            history.push( '/',{replace:true})
        })
    })

    return (
        <div>
            
        </div>
    )
}

export default Logout
