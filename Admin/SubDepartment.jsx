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

const SubDepartment = () => {
  const classes = useStyles();
  const [subDepartmentName, setSubDepartmentName] = useState('');
  const [department, setDepartment] = useState('select department'); 
  const [description, setDescription] = useState('');
  const [departmentError, setDepartmentError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!subDepartmentName.trim()) {
      alert('Please enter a sub-department name');
      return;
    }

    if (department === 'select department') {
      setDepartmentError('Please select a department');
      return;
    } else {
      setDepartmentError('');
    }

    if (!description.trim()) {
      alert('Please enter a description');
      return;
    }

    const subDepartmentId = uuidv4().substr(0, 8);

    alert(`Sub-Department created successfully with ID: ${subDepartmentId}`);
    setSubDepartmentName('');
    setDepartment('select department');
    setDescription('');
  };

  const handleSubDepartmentNameChange = (e) => {
    const value = e.target.value.replace(/[^a-zA-Z\s]/g, ''); // Allow only alphabets and spaces
    setSubDepartmentName(value.trimStart()); // Trim leading spaces
  };

  const handleDescriptionChange = (e) => {
    const value = e.target.value.replace(/[^a-zA-Z\s]/g, ''); // Allow only alphabets and spaces
    setDescription(value.trimStart()); // Trim leading spaces
  };

  return (
    <div className={classes.departmentFormContainer}>
      <Typography variant="h5" gutterBottom>Create Sub-Department</Typography>
      <form onSubmit={handleSubmit}>
        <div className={classes.formGroup}>
          <TextField
            id="subDepartmentName"
            label="Sub-Department Name"
            style={{backgroundColor:'white'}}
            value={subDepartmentName}
            onChange={handleSubDepartmentNameChange}
            variant="outlined"
            fullWidth
          />
        </div>
        <div className={classes.formGroup}>
          <Select
            id="department"
            value={department}
            style={{backgroundColor:'white'}}
            onChange={(e) => setDepartment(e.target.value)}
            variant="outlined"
            fullWidth
            error={!!departmentError}
          >
            <MenuItem value="select department">Select Department</MenuItem>
            <MenuItem value="Hyderabad">Hyderabad</MenuItem>
            <MenuItem value="Pune">Pune</MenuItem>
            <MenuItem value="Chennai">Chennai</MenuItem>
          </Select>
          {departmentError && <Typography variant="body2" className={classes.errorText}>{departmentError}</Typography>}
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

export default SubDepartment;
