import React, { useState } from 'react';
import { TextField, Button, Typography, Select, MenuItem, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { v4 as uuidv4 } from 'uuid';

const useStyles = makeStyles((theme) => ({
  departmentFormContainer: {
    width: 400,
    margin: 'auto',
    padding: 20,
    border: '1px solid #ccc',
    borderRadius: 5,
    marginTop: 35,
    backgroundColor: 'lightblue',
  },
  formGroup: {
    marginBottom: 20,
    padding: '0 10px',
  },
  createBtn: {
    backgroundColor: '#4caf50',
    color: 'white',
    borderRadius: 7,
    '&:hover': {
      backgroundColor: '#388e3c',
    },
  },
  cancelBtn: {
    backgroundColor: '#ffea00',
    marginLeft: 10,
    borderRadius: 7,
    '&:hover': {
      backgroundColor: '#fbc02d',
    },
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
}));

const Department = () => {
  const classes = useStyles();
  const [departmentName, setDepartmentName] = useState('');
  const [branch, setBranch] = useState('select branch'); 
  const [description, setDescription] = useState('');
  const [branchError, setBranchError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!departmentName.trim()) {
      alert('Please enter a department name');
      return;
    }

    if (branch === 'select branch') {
      setBranchError('Please select a branch');
      return;
    } else {
      setBranchError('');
    }

    if (!description.trim()) {
      alert('Please enter a description');
      return;
    }

    const departmentId = uuidv4().substr(0, 8);

    alert(`Department created successfully with ID: ${departmentId}`);
    setDepartmentName('');
    setBranch('select branch');
    setDescription('');
  };

  const handleDepartmentNameChange = (e) => {
    const value = e.target.value.replace(/[^a-zA-Z\s]/g, ''); // Allow only alphabets and spaces
    setDepartmentName(value.trimStart()); // Trim leading spaces
  };

  const handleDescriptionChange = (e) => {
    const value = e.target.value.replace(/[^a-zA-Z\s]/g, ''); // Allow only alphabets and spaces
    setDescription(value.trimStart()); // Trim leading spaces
  };

  return (
    <div className={classes.departmentFormContainer}>
      <Typography variant="h5" gutterBottom>Create Department</Typography>
      <form onSubmit={handleSubmit}>
        <div className={classes.formGroup}>
          <TextField
            id="departmentName"
            label="Department Name"
            style={{backgroundColor:'white'}}
            value={departmentName}
            onChange={handleDepartmentNameChange}
            variant="outlined"
            fullWidth
          />
        </div>
        <div className={classes.formGroup}>
          <Select
            id="branch"
            value={branch}
            style={{backgroundColor:'white'}}
            onChange={(e) => setBranch(e.target.value)}
            variant="outlined"
            fullWidth
          >
            <MenuItem value="select branch">Select Branch</MenuItem>
            <MenuItem value="Hyderabad">Hyderabad</MenuItem>
            <MenuItem value="Pune">Pune</MenuItem>
            <MenuItem value="Chennai">Chennai</MenuItem>
          </Select>
          {branchError && <Typography variant="body2" className={classes.errorText}>{branchError}</Typography>}
        </div>
        <div className={classes.formGroup}>
          <TextField
            id="description"
            label="Description"
            style={{backgroundColor:'white'}}
            value={description}
            onChange={handleDescriptionChange}
            variant="outlined"
            fullWidth
            multiline
            rows={4}
          />
        </div>
        <Grid container justifyContent="flex-end">
          <Button type="submit" style={{backgroundColor:'green',color:'black',marginRight:'10px',borderRadius:'7px'}} className={classes.createBtn}>Create</Button>
          <Button type="button" style={{backgroundColor:'yellow',color:'black',borderRadius:'7px'}} className={classes.cancelBtn}>Cancel</Button>
        </Grid>
      </form>
    </div>
  );
};

export default Department;
