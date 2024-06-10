import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  lapContainer: {
    maxWidth: 350,
    background: 'linear-gradient(0deg, rgb(15, 112, 154) 0%, rgb(28, 43, 61) 100%)',
    borderRadius: 40,
    padding: '25px 35px',
    border: '5px solid #fff',
    boxShadow: '0px 30px 30px -20px rgba(133, 189, 215, 0.8784313725)',
    margin: 20,
    marginLeft: 270,
    marginTop: 89,
  },
  heading: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 30,
    color: '#1089d3',
  },
  form: {
    marginTop: 20,
  },
  input: {
    width: '90%',
    background: '#fff',
    border: 'none',
    padding: '15px 20px',
    borderRadius: 20,
    marginTop: 15,
    marginBottom: 15,
    boxShadow: '0px 10px 10px -5px #cff0ff',
    borderInline: '2px solid transparent',
  },
  forgotPassword: {
    display: 'block',
    marginTop: 20,
    marginLeft: 10,
  },
  link: {
    fontSize: 15,
    color: '#0099ff',
    textDecoration: 'none',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '90%',
    margin: '20px auto',
  },
  loginButton: {
    width: '45%',
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, rgb(16, 137, 211) 0%, rgb(18, 177, 209) 100%)',
    color: '#fff',
    paddingBlock: 15,
    borderRadius: 30,
    boxShadow: '0px 20px 10px -15px rgba(133, 189, 215, 0.8784313725)',
    border: 'none',
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.03)',
      boxShadow: '0px 23px 10px -20px rgba(133, 189, 215, 0.8784313725)',
    },
    '&:active': {
      transform: 'scale(0.95)',
      boxShadow: '0px 15px 10px -10px rgba(133, 189, 215, 0.8784313725)',
    },
  },
  cancelButton: {
    width: '45%',
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, rgb(211, 16, 16) 0%, rgb(209, 18, 18) 100%)',
    color: '#fff',
    paddingBlock: 15,
    borderRadius: 30,
    boxShadow: '0px 20px 10px -15px rgba(215, 133, 133, 0.8784313725)',
    border: 'none',
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.03)',
      boxShadow: '0px 23px 10px -20px rgba(215, 133, 133, 0.8784313725)',
    },
    '&:active': {
      transform: 'scale(0.95)',
      boxShadow: '0px 15px 10px -10px rgba(215, 133, 133, 0.8784313725)',
    },
  },
}));

function Lap() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    
    setEmail('');
    setPassword('');
    alert('Login Successfully');
    navigate('/Dashboard'); 
  };

  const handleCancel = () => {
    setEmail('');
    setPassword('');
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    if (value.length === 0 || value[0] !== ' ') {
      setEmail(value);
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    if (value === '' || value[0] !== ' ') {
      setPassword(value);
    }
  };

  return (
    <div style={{ marginTop: '38px' }} className={classes.lapContainer}>
      <Typography variant="h4" className={classes.heading}>Admin Login</Typography>
      <form className={classes.form} style={{ marginTop: '20px' }} onSubmit={handleLogin}>
        <TextField
          required
          className={classes.input}
          type="email"
          name="email"
          id="email"
          style={{ marginTop: '20px' }}
          placeholder="E-mail or User Id"
          value={email}
          onChange={handleEmailChange}
        />
        <TextField
          required
          className={classes.input}
          type="password"
          name="password"
          style={{ marginTop: '40px' }}
          id="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <Typography variant="body2" style={{ marginTop: '20px' }} className={classes.forgotPassword}>
          <RouterLink to="/Forgot" className={classes.link}>Forgot Password?</RouterLink>
        </Typography>
        <div className={classes.buttonContainer}>
          <Button
            className={classes.loginButton}
            type="submit"
            style={{ color: 'black', borderRadius: '20px' }}
          >
            Login
          </Button>
          <Button
            className={classes.cancelButton}
            type="button"
            onClick={handleCancel}
            style={{ color: 'black', borderRadius: '20px' }}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Lap;
