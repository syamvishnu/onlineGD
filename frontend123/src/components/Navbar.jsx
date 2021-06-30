import React, {useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";

import { Button, Menu, Popup, Grid, Header, Card, Image, Icon } from 'semantic-ui-react';
import "./components css/homepage.css";
import axios from "axios";



function Navbar() {

    const [getdata, setGetdata] = useState();
    const [profdata, setProfdata] = useState();
    const [profdata1, setProfdata1] = useState();
    const [profdata2, setProfdata2] = useState();
    const [profdata3, setProfdata3] = useState();
    

    useEffect(()=>{
        axios.get("http://localhost:3001/login").then((res)=>{
            if(res.data.loggedin === true){
                setGetdata(res.data.user.name)
                setProfdata(res.data.user.degn)
                setProfdata1(res.data.user.glno)
                setProfdata2(res.data.user.penno)
                setProfdata3(res.data.user.mob)
            }

        })
    },[]) 
    // const history = useHistory();
    // function logout (){
    //     localStorage.clear();
    //     history.push( '/',{replace:true})

    // }


    
    

    return (
        <div>
        <Menu size="tiny">
        <Menu.Item  header  >My Company </Menu.Item>
            <Menu.Item position='right'  >
                    <Popup  position="top left" trigger={<button size='large'>
                                                                <Icon.Group size='big' >
                                                                    <Icon name='user circle'   color='teal' />
                                                                    <Icon corner name='add'  color='teal'/>
                                                                    </Icon.Group>
                                                                       {getdata}
                                                                </button>} flowing hoverable>
                        <Card.Group>
                            <Card>
                            <Card.Content>
                                <Card.Header>{getdata}</Card.Header>
                                <Card.Meta>{profdata}  {profdata1}</Card.Meta>
                                <Card.Description>
                                PEN No: {profdata2} 
                                <br/><strong>Phone No: {profdata3}</strong>
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <div className='ui two buttons'>
                                <Button basic color='teal'  >
                                    <Link to="/logout">Log Out</Link>
                                </Button>
                                
                                </div>
                            </Card.Content>
                            </Card>
                            
                        </Card.Group>
                    </Popup>
            </Menu.Item>
            
    </Menu>
        </div>
    )
}

export default Navbar;
