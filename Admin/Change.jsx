import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Typography, TextField, Button } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    margin: 'auto',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  title: {
    marginBottom: 20,
    textAlign: 'center',
  },
  textField: {
    marginBottom: 20,
  },
  button: {
    marginTop: 10,
  },
  errorText: {
    color: 'red',
    marginTop: 5,
    fontSize: '0.8rem',
  },
  successMessage: {
    color: 'green',
    marginTop: 5,
    fontSize: '0.8rem',
    textAlign: 'center',
  },
}));

function Change() {
  const classes = useStyles();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  
    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!currentPassword.trim()) {
          alert('Please enter a current password');
          return;
        }
        if (!newPassword.trim()) {
            alert('Please enter a new password');
            return;
          }
          if (!confirmPassword.trim()) {
            alert('Please enter a confirm password');
            return;
          }
          if (newPassword !== confirmPassword) {
            setErrors({ confirmPassword: 'Passwords do not match' });
            return;
          }

    
    setSuccessMessage('Password successfully changed');
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setTimeout(() => {
        setSuccessMessage('');
      }, 3000); 
    };
  
  

  return (
    <div className={classes.root} style={{marginTop:'50px',}}>
      <Typography variant="h5" className={classes.title}>
        Change Password
      </Typography>
      {successMessage && (
        <Typography variant="body2" className={classes.successMessage}>
          {successMessage}
        </Typography>
      )}
      <form onSubmit={handleSubmit}>
        <TextField
          type="password"
          label="Current Password"
          style={{marginTop:'20px'}}
          variant="outlined"
          fullWidth
          className={classes.textField}
          value={currentPassword}
          onChange={(e) => {
            setCurrentPassword(e.target.value);
            setErrors({ ...errors, currentPassword: '' }); 
          }}
          error={!!errors.currentPassword}
        />
        {errors.currentPassword && (
          <Typography variant="body2" className={classes.errorText}>
            {errors.currentPassword}
          </Typography>
        )}
        <TextField
          type="password"
          label="New Password"
          variant="outlined"
          style={{marginTop:'20px'}}
          fullWidth
          className={classes.textField}
          value={newPassword}
          onChange={(e) => {
            setNewPassword(e.target.value);
            setErrors({ ...errors, newPassword: '' }); 
          }}
          error={!!errors.newPassword}
        />
        {errors.newPassword && (
          <Typography variant="body2" className={classes.errorText}>
            {errors.newPassword}
          </Typography>
        )}
        <TextField
          type="password"
          label="Confirm Password"
          variant="outlined"
          style={{marginTop:'20px'}}
          fullWidth
          className={classes.textField}
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            setErrors({ ...errors, confirmPassword: '' }); 
          }}
          error={!!errors.confirmPassword}
        />
        {errors.confirmPassword && (
          <Typography variant="body2" className={classes.errorText}>
            {errors.confirmPassword}
          </Typography>
        )}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{marginTop:'20px',borderRadius:'30px'}}
          fullWidth
          className={classes.button}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Change;
