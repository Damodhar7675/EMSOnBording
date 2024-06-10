import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './basic-info.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import {
    Navbar,  Nav,  Container,  ListGroup,  ListGroupItem,  Collapse,  Button,  Row,  Col,  Card,
  } from 'react-bootstrap';
  import { Typography } from '@mui/material';
  import { useEffect } from 'react';

export default function Basicinfo(){

    const [positionSelected, setPositionSelected] = useState('')
    const [name, setName] = useState('')
    const [emailId, setEmailId] = useState('')
    const [mobile, setMobile] = useState('')
    const [address, setAddress] = useState('')
    const [gender, setGender] = useState(' ')
    const [image, setImage] = useState('')
    const [qualification, setQualification] = useState('')
    const [yearOfPassing, setYearOfPassing] = useState('')
    const [academicsPercentage, setAcademicsPercentage] = useState('')
    const [numberOfYears,setNumberOfYears] = useState('')
    const [numberOfMonths, setNumberOfMonths] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [designation, setDesignation] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [location, setLocation] = useState('')
    const [description, setDescription] = useState('')

    const [currentTime, setCurrentTime] = useState(new Date());
    // const [openTrainings, setOpenTrainings] = useState(false);
    const [openForms, setOpenForms] = useState(false);
    const [openStatus, setOpenStatus] = useState(false);
  
    // const toggleTrainings = () => setOpenTrainings(!openTrainings);
    const toggleForms = () => setOpenForms(!openForms);
    const toggleStatus = () => setOpenStatus(!openStatus);
  
    useEffect(() => {
      const timer = setInterval(() => setCurrentTime(new Date()), 1000);
      return () => clearInterval(timer);
    }, []);

    const submit = () =>{
        const data ={
            positionSelected,
            name,
            emailId,
            mobile,
            address,
            gender,
            qualification,
            yearOfPassing,
            academicsPercentage,
            numberOfYears,
            numberOfMonths,
            companyName,
            designation,
            startDate,
            endDate,
            location,
            description,
        }
        try{
            const letters = /[a-b,A-B]/
            const num = /[0-9]/
            const chars = /[~!@#$%^&*()_+|}{:"?><,./'\`}]/

            if(positionSelected == '' || name == '' || emailId == '' || mobile == '' || address == '' || gender == '' ||
                qualification == '' || yearOfPassing == '' || academicsPercentage == '' || numberOfYears == '' || 
                numberOfMonths == '' || companyName == '' || designation == '' || startDate == '' || endDate == '' ||
                location == '' || description == ''
            ){
            alert("fill in all the details")
            return;
            }
            if(chars.test(positionSelected) || num.test(positionSelected)){
                alert("Enter valid position you are selected for")
                return;
            }
            if(chars.test(name) || num.test(name)){
                alert("Name only contains letters only")
                return;
            }
            if(emailId[0] == num || !emailId.endsWith('@gmail.com')){
                alert("Enter valid Emailid")
                return;
            }
            if(letters.test(mobile) || chars.test(mobile)){
                alert("Enter valid mobile number")
                return;
            }
            if(num.test(qualification) || chars.test(qualification)){
                alert("Enter valid qualification details")
            }
            if(academicsPercentage.length !=2){
                alert("enter valid percentage")
                return;
            }
            if(num.test(designation) || chars.test(designation)){
                alert("Enter valid designation details")
                return;
            }
            if(num.test(location) || chars.test(location)){
                alert("Enter valid location")
                return;
            }
            if(num.test(description) || chars.test(description)){
                alert("description contains only letters")
                return;
            }


            const response = axios.post('',data)
            setPositionSelected('');
            setName('');
            setEmailId('');
            setMobile('');
            setAddress('');
            setGender('');
            setQualification('');
            setYearOfPassing('');
            setAcademicsPercentage('');
            setNumberOfMonths('');
            setNumberOfYears('');
            setDesignation('');
            setCompanyName('');
            setStartDate('');
            setEndDate('');
            setLocation('');
            setDescription('')
        }
        catch (e) {
            console.log("error",e);
        }
    }

    return(
        <>
            <div className='d-flex'> 
                <Link to={'/NewEMployee'}><div className='nav-bar' style={{backgroundColor:'royalblue',textDecoration:'none',color:'black'}}>Basicinfo</div></Link>
                <Link to={'/Documentsubmission'}><div className='nav-bar' style={{textDecoration:'none',color:'black'}}>Document&nbsp;Submission</div></Link>
                <Link to={'/Declaresubmit'}><div className='nav-bar' style={{textDecoration:'none',color:'black'}}>Declaration&nbsp;&&nbsp;submission</div></Link>
            </div>
            <div className='basicinfo-form-container'>
                <h1 style={{textAlign:'center',marginBottom:'50px'}}>Please Fill in all the details mentioned below</h1>
                <div className='d-flex'>
                    <table>
                        <tr>
                            <td>Selected Position:</td>
                            <td><input type='text' value={positionSelected} onChange={(e)=>setPositionSelected(e.target.value)}></input></td>
                        </tr>
                        <tr>
                            <td>Name:</td>
                            <td><input type='text' value={name} onChange={(e)=>setName(e.target.value)}></input></td>
                        </tr>
                        <tr>
                            <td>Email ID:</td>
                            <td><input type='email' value={emailId} onChange={(e)=>setEmailId(e.target.value)}></input></td>
                        </tr>
                        <tr>
                            <td>Mobile:</td>
                            <td><input type='number' value={mobile} onChange={(e)=>setMobile(e.target.value)}></input></td>
                        </tr>
                        <tr>
                            <td>Address:</td>
                            <td><textarea cols={70}rows={5} value={address} onChange={(e)=>setAddress(e.target.value)}></textarea></td>
                        </tr>
                        <tr>
                            <td>Gender:</td>
                            <td><input type='radio' className='inputradio' value={gender} onChange={(e)=>setGender(e.target.value)}></input><span>Male</span></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input type='radio'value={gender} onChange={(e)=>setGender(e.target.value)}></input><span>Female</span></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input type='radio'value={gender} onChange={(e)=>setGender(e.target.value)}></input><span>Others</span></td>
                        </tr>
                    </table>
                    <div className='basicinfo-img'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScnNEz8I9yrvaEAL6WZH6dO0bVeIJMAgDL9l79UsS8by8PF1c-VDIsACFIo7z_niEl7SI&usqp=CAU'></img>
                        <input type='file'></input>
                    </div>
                </div>
                <div className='experience'>
                    <div style={{marginTop:'20px'}}>
                        <p>Academics :</p>
                        <input type='text' style={{marginRight:'10px'}} value={qualification} onChange={(e)=>setQualification(e.target.value)} placeholder='qualification'></input>
                        <input type='number' style={{marginRight:'10px'}} value={yearOfPassing} onChange={(e)=>setYearOfPassing(e.target.value)} placeholder='year of passsing'></input>
                        <input type='number' style={{marginRight:'10px'}} value={academicsPercentage} onChange={(e)=>setAcademicsPercentage(e.target.value)} placeholder='percentage'></input>
                    </div>
                    <div style={{marginTop:'20px'}}>
                        <p>Professional :</p>
                        <input type='text' style={{marginRight:'10px'}}  placeholder='course name'></input>
                        <input type='text' style={{marginRight:'10px'}} placeholder='month/year'></input>
                        <input type='number' placeholder='percentage'></input>
                    </div>
                    <div style={{marginTop:'20px'}}>
                        <p>Experience :</p>
                        <input type='number' style={{marginRight:'10px'}} value={numberOfYears} onChange={(e)=>setNumberOfYears(e.target.value)}  placeholder='noof years'></input>
                        <input type='number' placeholder='noof months' value={numberOfMonths} onChange={(e)=>setNumberOfMonths(e.target.value)}></input>
                    </div>
                    <div style={{marginTop:'20px'}}>
                        <p>Add Experience :</p>
                        <div style={{padding:'10px'}}>
                        <input type='text' style={{marginRight:'10px'}} value={companyName} onChange={(e)=>setCompanyName(e.target.value)} placeholder='Company Name'></input>
                        <input type='text' style={{marginRight:'10px'}} value={designation} onChange={(e)=>setDesignation(e.target.value)} placeholder='designation'></input>
                        <input type='text' style={{marginRight:'10px'}} value={startDate} onChange={(e)=>setStartDate(e.target.value)} placeholder='numberof years'></input>
                        <input type='text' style={{marginRight:'10px',marginTop:'20px'}} value={endDate} onChange={(e)=>setEndDate(e.target.value)} placeholder='number of months'></input>
                        <input type='text' placeholder='Location' value={location} onChange={(e)=>setLocation(e.target.value)}></input>
                        </div>
                    </div>
                    <div>
                        <p>Description</p>
                    <textarea rows={5} cols={100} value={description} onChange={(e)=>setDescription(e.target.value)} placeholder='Write about yourself'></textarea>
                    </div>
                </div>
                <button  type="button" class="btn btn-primary" style={{marginLeft:'1100px'}}><Link className='dd_Hr_sidlist'  to={'/Documentsubmission'}>Next</Link></button>
            </div>
        </>
    );
}