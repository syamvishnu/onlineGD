import axios from 'axios';
import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom";

function Protected(props) {
    let Cmp = props.cmp;
    const history = useHistory();
    useEffect(()=>{
        axios.get("http://localhost:3001/login").then((res)=>{
            if(!res.data.loggedin === true){
                history.push("/")
            }
        })
    },[])

    return (
        <div>
            <Cmp />
        </div>
    )
}

export default Protected
