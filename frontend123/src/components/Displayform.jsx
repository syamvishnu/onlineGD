import React, { useState, useEffect } from 'react';
import { Table } from 'semantic-ui-react';
import "./components css/displayform.css";
import axios from "axios";



function Displayform() {

  
    const [getdata, setGetdata] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:3001/").then(res=>{
            setGetdata(res.data)
        })
    }) 
  
    return (
        <div className="dform">
            <Table fixed>
              <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Date & Time</Table.HeaderCell>
                    <Table.HeaderCell>GD Charge</Table.HeaderCell>
                    <Table.HeaderCell>Title</Table.HeaderCell>
                    <Table.HeaderCell>Message</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              {getdata.reverse().map((val)=>{
                  return(
                      <Table.Body>
                        <Table.Row>
                          <Table.Cell>{val.dt}</Table.Cell>
                          <Table.Cell>{val.gno +" "+ val.gdname}</Table.Cell>
                          <Table.Cell>{val.title}</Table.Cell>
                          <Table.Cell >
                              {val.message}
                          </Table.Cell>
                        </Table.Row>
                      </Table.Body>
                  )
                })}
                
            </Table>
        </div>
    )
}

export default Displayform
