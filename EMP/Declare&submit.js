import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import './Declare&submit.css'
import axios from "axios";
import {
    Navbar,  Nav,  Container,  ListGroup,  ListGroupItem,  Collapse,  Button,  Row,  Col,  Card,
  } from 'react-bootstrap';
  import { Typography } from '@mui/material';

export default function Declaresubmit(){

    const [currentDate, setCurrentDate] = useState("");
    const [currentTime, setCurrentTime] = useState("");
    const [checkbox, setCheckbox] = useState('');
  
    useEffect(() => {
      const now = new Date();
      const date = now.toLocaleDateString("en-CA"); 
      const time = now.toLocaleTimeString("en-GB"); 
  
      setCurrentDate(date);
      setCurrentTime(time);
    }, []);

    const submit = async() =>{
        const data ={
            currentDate,
            currentTime,
            checkbox,
        }
        try{
            if(checkbox == ''){
                alert("please selcet the checkbox");
                return;
            }

            const response = await axios.post("",data)
                setCurrentDate('');
                setCurrentTime('');
                setCheckbox('');

                console.log('response',response);
        }
        catch(e){
            console.log('error',e)
        }
    } 
 
return(
    <>
          {/* <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://media.licdn.com/dms/image/D560BAQF5Aj199kY35g/company-logo_200_200/0/1706348376133/anarghyacommunications_logo?e=2147483647&v=beta&t=_hxxKGPM-PIDp8NZrZz9hbXJtb_1qiDC-aXpFvMceZo"
              width="50"
              height="40"
              className="d-inline-block align-top"
              alt="Logo"
            />{' '}
            Anarghya Communications
          </Navbar.Brand>
          <Navbar.Text>{currentTime.toLocaleString()}</Navbar.Text>
          <Button variant="outline-light" className="ms-3">
            Logoff
          </Button>
        </Container>
      </Navbar> */}
        <div className='d-flex'> 
                <Link to={'/NewEmployee'}><div className='nav-bar' style={{textDecoration:'none',color:'black'}}>Basicinfo</div></Link>
                <Link to={'/Documentsubmission'}><div className='nav-bar' style={{textDecoration:'none',color:'black'}}>Document&nbsp;Submission</div></Link>
                <Link to={'/Declaresubmit'}><div className='nav-bar' style={{backgroundColor:'royalblue',textDecoration:'none',color:'black'}}>Declaration&nbsp;&&&nbsp;submission</div></Link>
            </div>
            <h1 style={{textAlign:'center'}}>Declaration</h1>
        <div className="declaration-cont">            
            <p>I hereby declare that if I am selected for the applied post, I am willing to work either at 
                Company Name  headquarter or any of its regional offices and can be transferred from one 
                location to another. 
            </p>
            <p>
            I hereby declare that the information given by me in the Application is true, complete and correct
            to the best of my knowledge and belief and that nothing has been concealed or distorted. If ay point 
            of time, I am found to have concealed/distorted any information or given any false statement, 
            my application/appointment shall liable to be summarily rejected/terminated without notice or
            compensation.
            </p>
            <div className="">
            <input type="radio" value={checkbox} onChange={(e)=>setCheckbox(e.target.value)}></input>
            <p>By clicking on the check box I accept to the terms and conditions specified in the above declaration</p>
            </div>
            <p>Date :</p>
            <input type="text" value={currentDate} onChange={(e)=>setCurrentDate(e.target.value)}></input>
            <p>Time :</p>
            <input type="text" value={currentTime} onChange={(e)=>setCurrentTime(e.target.value)}></input>
            <div className="declaresubmit-btn-cont d-flex">
                <button type="button" class="btn btn-danger" style={{marginLeft:"-90px",marginRight:"10px"}}><Link className='dd_Hr_sidlist' to={'/documentsubmission'}>Back</Link></button>
                <button type="button" class="btn btn-primary" style={{marginRight:"40px"}} onClick={submit}>Submit</button>
            </div>
        </div>
    </>
);
}