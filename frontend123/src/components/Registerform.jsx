import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Card, Button, Form, Header, Image } from 'semantic-ui-react';
import axios from "axios";
import "./components css/regpage.css";
import logo from "../images/reg4.png";

function Registerform() {

    const [indata,setIndata] = useState({
        name:"",
        mob:"",
        degn:"",
        glno:"",
        penno:"",
        password:""
    })

    function handleChange(event){
        const {value, name}=event.target;
        setIndata(preValue =>{
            return{
                ...preValue,
                [name]:value};
        });
    }

    function handleClick(event){
            event.preventDefault();
            const newData = {
                name:indata.name,
                mob:indata.mob,
                degn:indata.degn,
                glno:indata.glno,
                penno:indata.penno,
                password:indata.password
            }
            axios.post("http://localhost:3001/register",newData)

            
    }
    
    return (
        <div className="abc">
            <div className="regpage">
                
                <Card>              
                        <Form className="card">

                        <Header as='h2' >
                            <Image className="reg1" circular src={logo} /> Registration
                        </Header>
                        <Form.Group unstackable widths={2} className="card">
                        <Form.Input 
                        label='Name' 
                        name="name"
                        placeholder='Enter Name'  
                        onChange={handleChange}
                        value={indata.name}
                        />
                        <Form.Input 
                        label='Mobile Number' 
                        placeholder='Enter MobileNo.' 
                        onChange={handleChange}
                        value={indata.mob}
                        name="mob"
                        />
                        
                        </Form.Group>
                        <Form.Group widths={2} className="card">
                        <Form.Input 
                        label='Designation' 
                        placeholder='Designation' 
                        onChange={handleChange}
                        value={indata.degn}
                        name="degn"
                        />
                        <Form.Input 
                        label='GL. Number' 
                        placeholder='Enter GL No.' 
                        onChange={handleChange}
                        value={indata.glno}
                        name="glno"
                        />
                        </Form.Group>
                        <Form.Group unstackable widths={2} className="card">
                        <Form.Input 
                        label='PEN Number' 
                        placeholder='Enter PEN No.' 
                        onChange={handleChange}
                        value={indata.penno}
                        name="penno"
                        />
                        <Form.Input 
                        type="password" 
                        label='Password' 
                        placeholder='Enter Password' 
                        onChange={handleChange}
                        value={indata.password}
                        name="password"
                        />
                        </Form.Group>   
                        <Button onClick={handleClick} type='submit'><Link to="/">Submit</Link></Button>
                    </Form>
                </Card>
            </div>
        </div>
    )
}

export default Registerform
