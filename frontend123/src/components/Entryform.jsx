import React, { useState, useEffect } from 'react';
import { Button, Form, TextArea } from 'semantic-ui-react';
import "./components css/entryform.css";
import axios from "axios";


function Entryform() {

  const [getdata, setGetdata] = useState()
  useEffect(()=>{
      axios.get("http://localhost:3001/login").then((res)=>{
          if(res.data.loggedin === true){
              setGetdata(res.data.user)
          }
          
      })
  },[]) 

  const [getmsg, setGetmsg] = useState({
    title:"",
    message:"",
  })

  function handleChange(event){
    const {value, name}= event.target;

    setGetmsg(preValue=>{
      return{
        ...preValue,
        [name]:value};
      
    })

  }

  function handleClick(event){
    event.preventDefault();
    const currDate =new Date().toLocaleString();   
    
    const newData ={
      title:getmsg.title,
      message:getmsg.message,
      dt:currDate,
      gdname:getdata.name,
      gno:getdata.glno,
      designation:getdata.degn


    }
    axios.post("http://localhost:3001/", newData).then(setGetmsg({
      title:"",
      message:"",
    }))
  }


    return (
        <div>
        <Form className="eform" >
        <Form.Field >
          <label >Title</label>
          <input name='title'
            onChange={handleChange}
            label='Title' 
            placeholder='Title'
            value={getmsg.title} />
          


        </Form.Field>
        <Form.Field>
          <label>Message</label>
          <TextArea name='message'
          onChange={handleChange}
          label='Message'
          placeholder='Type the message...'
          value={getmsg.message} style={{ minHeight: 100 }} />
        </Form.Field>
        <Button type='submit' basic color='teal' onClick={handleClick}>Submit</Button>
      </Form>
        </div>
    )
}

export default Entryform
