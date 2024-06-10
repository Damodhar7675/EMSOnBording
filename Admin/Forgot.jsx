import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  forgotContainer: {
    maxWidth: 400,
    margin: '0 auto',
    padding: 20,
    border: '1px solid #ccc',
    borderRadius: 40,
    backgroundColor: '#f9f9f9',
    marginTop: 90,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#009dff',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  buttonContainer: {
    textAlign: 'center',
    marginTop: 30,
  },
  resetPasswordButton: {
    padding: '10px 20px',
    fontSize: 16,
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: 13,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#128412',
    },
  },
}));

function Forgot() {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleChangeConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    if (password !== confirmPassword) {
      setPasswordError("Passwords don't match");
      setTimeout(() => setPasswordError(''), 3000);
      return;
    }

    alert('Password reset successful');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setEmailError('');
    setPasswordError('');
  };

  return (
    <div className={classes.forgotContainer} style={{marginTop:'40px'}}>
      <Typography variant="h5" className={classes.heading}>Forgot Password</Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          required
          className={classes.input}
          type="email"
          name="email"
          id="email"
          label="Email-id"
          value={email}
          onChange={handleChangeEmail}
          error={!!emailError}
          helperText={emailError}
        />
        <TextField
          required
          className={classes.input}
          type="password"
          name="password"
          id="password"
          label="New Password"
          value={password}
          onChange={handleChangePassword}
          style={{marginTop:'30px'}}
        />
        <TextField
          required
          className={classes.input}
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          label="Confirm Password"
          value={confirmPassword}
          onChange={handleChangeConfirmPassword}
          style={{marginTop:'40px'}}
          error={!!passwordError}
          helperText={passwordError}
        />
        <div className={classes.buttonContainer}>
          <Button
            className={classes.resetPasswordButton}
            type="submit"
            variant="contained"
            style={{borderRadius:'20px'}}
          >
            Reset Password
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Forgot;
