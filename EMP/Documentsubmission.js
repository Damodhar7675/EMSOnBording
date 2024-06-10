import React from "react";
import { Link } from "react-router-dom";
import './Docuentsubmission.css'
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
    Navbar,  Nav,  Container,  ListGroup,  ListGroupItem,  Collapse,  Button,  Row,  Col,  Card,
  } from 'react-bootstrap';
  import { Typography } from '@mui/material';
  import { useEffect } from "react";

export default function Documentsubmission(){

    const [offerletter,setOfferletter] = useState('')
    const [adhaarid,setAdhaarid] = useState('')
    const [pancard, setPancard] = useState('')
    const [addressproof, setAddressproof] = useState('')
    const [expcertificates, setExpcertificates] = useState('')
    const [noc, setNoc] = useState('')
    const [resume, setResume] = useState('')
    const [other, setOther] = useState('')
    const navigate = useNavigate('');

    const submit =  async() =>{

        // const [currentTime, setCurrentTime] = useState(new Date());
        // // const [openTrainings, setOpenTrainings] = useState(false);
        // const [openForms, setOpenForms] = useState(false);
        // const [openStatus, setOpenStatus] = useState(false);
      
        // // const toggleTrainings = () => setOpenTrainings(!openTrainings);
        // const toggleForms = () => setOpenForms(!openForms);
        // const toggleStatus = () => setOpenStatus(!openStatus);
      
        // useEffect(() => {
        //   const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        //   return () => clearInterval(timer);
        // }, []);

        const data = {
            offerletter,
            adhaarid,
            addressproof,
            pancard,
            expcertificates,
            noc,
            resume,
            other,
        }

        try{
            if(offerletter == '' || adhaarid == '' || addressproof == '' || pancard == '' || 
            expcertificates == '' || noc == '' || resume == '' ||other == ''){
                alert("please fill in all the details");
                return;
            }
            const response = await axios.post('',data)
            setOfferletter('');
            setAdhaarid('');
            setAddressproof('');
            setPancard('');
            setExpcertificates('');
            setNoc('');
            setResume('');
            setOther('');

            console.log('response',response);
            navigate('/Declaresubmit');
        }
        catch(e){
            console.log('error',e);
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
                <Link to={'/Documentsubmission'}><div className='nav-bar' style={{backgroundColor:'royalblue',textDecoration:'none',color:'black'}}>Document&nbsp;Submission</div></Link>
                <Link to={'/Declaresubmit'}><div className='nav-bar' style={{textDecoration:'none',color:'black'}}>Declaration&nbsp;&&nbsp;submission</div></Link>
            </div>
            <h1 style={{textAlign:'center',marginTop:'30px'}}>Uploads</h1>
            <div className="docsubmit-cont">
                <table className="table">
                    <tr>
                        <td>Offer Letter :</td>
                        <td><input type="file" value={offerletter} onChange={(e)=>setOfferletter(e.target.value)}></input></td>
                    </tr>
                    <tr>
                        <td>AdhaarId :</td>
                        <td><input type="file" value={adhaarid} onChange={(e)=>setAdhaarid(e.target.value)}></input></td>
                    </tr>
                    <tr>
                        <td>Pan Card :</td>
                        <td><input type="file" value={pancard} onChange={(e)=>setPancard(e.target.value)}></input></td>
                    </tr>
                    <tr>
                        <td>Address proof :</td>
                        <td><input type="file" value={addressproof} onChange={(e)=>setAddressproof(e.target.value)}></input></td>
                    </tr>
                    <tr>
                        <td>Experience Certificates :</td>
                        <td><input type="file" value={expcertificates} onChange={(e)=>setExpcertificates(e.target.value)}></input></td>
                    </tr>
                    <tr>
                        <td>NOC :</td>
                        <td><input type="file" value={noc} onChange={(e)=>setNoc(e.target.value)} placeholder="add noc"></input></td>
                    </tr>
                    <tr>
                        <td>Resume :</td>
                        <td><input type="file" value={resume} onChange={(e)=>setResume(e.target.value)}></input></td>
                    </tr>
                    <tr>
                        <td>Other document :</td>
                        <td><input type="file" value={other} onChange={(e)=>setOther(e.target.value)}></input></td>
                    </tr>
                </table>
                <div className="d-flex btn-cont">
                <button type="button" class="btn btn-warning"><Link className='dd_Hr_sidlist' to={'/Basicinfo'}>Back</Link></button>
                <button type="button" class="btn btn-info" style={{marginLeft:'20px'}} onClick={submit}>Next</button>
                </div>
            </div>
        </>
    );
}