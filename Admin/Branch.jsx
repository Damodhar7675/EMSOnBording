import React, { useState } from 'react';
import { TextField, Button, Typography, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { lightBlue } from '@mui/material/colors';

const useStyles = makeStyles((theme) => ({
  branchFormContainer: {
    width: 400,
    margin: 'auto',
    padding: 20,
    border: '1px solid #ccc',
    borderRadius: 20,
    backgroundColor: 'lightblue',
    marginTop: 69,
  },
  formGroup: {
    marginBottom: 20,
  },
  formActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  createBtn: {
    backgroundColor: 'green', 
    color: '#000',
    marginRight: 10,
  },
  cancelBtn: {
    backgroundColor: 'yellow',
    color: '#000',
  },
}));

const Branch = () => {
  const classes = useStyles();
  const [branchName, setBranchName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!branchName.trim()) {
      alert('Please enter a branch name');
      return;
    }

    if (!description.trim()) {
      alert('Please enter a description');
      return;
    }

    const branchId = Math.floor(Math.random() * 10000000);

    alert(`Branch created successfully with ID: ${branchId}`);
    setBranchName('');
    setDescription('');
  };

  const handleBranchNameChange = (e) => {
    const value = e.target.value.replace(/[^a-zA-Z\s]/g, ''); // Allow only alphabets and spaces
    setBranchName(value.trimStart()); // Trim leading spaces
  };

  const handleDescriptionChange = (e) => {
    const value = e.target.value.replace(/[^a-zA-Z\s]/g, ''); // Allow only alphabets and spaces
    setDescription(value.trimStart()); // Trim leading spaces
  };

  return (
    <div className={classes.branchFormContainer} >
      <Typography variant="h5">Create Branch</Typography>
      <form onSubmit={handleSubmit}>
        <div className={classes.formGroup}>
          <TextField
            id="branchName"
            label="Branch Name"
            style={{ backgroundColor: 'white' }}
            value={branchName}
            // onChange={(e) => setBranchName(e.target.value)}
            onChange={handleBranchNameChange}
            variant="outlined"
            fullWidth
          />
        </div>
        <div className={classes.formGroup}>
          <TextField
            id="description"
            label="Description"
            style={{ backgroundColor: 'white' }}
            value={description}
            // onChange={(e) => setDescription(e.target.value)}
            variant="outlined"
            onChange={handleDescriptionChange}
            fullWidth
            multiline
            rows={4}
          />
        </div>
        <div className={classes.formActions}>
          <Button type="submit" style={{backgroundColor:'green',color:'black',marginRight:'10px',borderRadius:'7px'}} className={classes.createBtn} >Create</Button>
          <Button type="button" style={{backgroundColor:'yellow',color:'black',borderRadius:'7px'}} className={classes.cancelBtn}>Cancel</Button>
        </div>
      </form>
    </div>
  );
};

export default Branch;
