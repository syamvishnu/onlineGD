import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import "./components css/loginpage.css";
import { Card, Image, Button, Form } from 'semantic-ui-react'
import axios from "axios";
import logo from "../images/ggg.jpg";





function Loginform() {
  axios.defaults.withCredentials=true 
  const history = useHistory();

    const [logdata, setLogdata] = useState({
        penno:"",
        password:""
    })
    const [msg, setmsg] = useState()
    function handleChange(event){
        const {value, name}=event.target;
        setLogdata(preValue =>{
            return{ 
                ...preValue,
                [name]:value};
        })};

        function handleClick(event){
            event.preventDefault();
            const newData = {

                penno:logdata.penno,
                password:logdata.password
            }
            axios.post("http://localhost:3001/login",newData).then((response)=>{
              // console.log(response.data.message +" - " + response.data.status);
              // console.log(response.data.user1);

              if(response.data.status === 200){
                console.log(response.data.message);
                
                history.push("/home");
                
              }else{
                setmsg(response.data.message)
                history.push("/");
                
              }
            })
    }


    return (
        <div className="loginpage">
        <Card  >
        
        <h3 className="msgdis" style={{ color: 'red' }}>{msg}</h3>
        <Image src={logo} wrapped ui={false} />
        <Form >
        <Form.Field>
          <label className="loginpage">PEN Number</label>
          <input 
          type='tel' 
          placeholder='PEN Number' 
          name="penno"
          onChange={handleChange}
          value={logdata.penno}
          />
        </Form.Field>
        <Form.Field>
          <label className="loginpage">Password</label>
          <input 
          type="password" 
          placeholder='Password' 
          name="password"
          onChange={handleChange}
          value={logdata.password}
          />
        </Form.Field>
        <Form.Field className="loginpage">
        <Button onClick={handleClick} type='submit'>Submit </Button>
        </Form.Field>
        
      </Form>
      </Card>
        </div>
    )
}

export default Loginform;
