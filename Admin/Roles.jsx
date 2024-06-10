import React, { useState } from 'react';
import { TextField, Button, Typography, Select, MenuItem } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { v4 as uuidv4 } from 'uuid';

const useStyles = makeStyles((theme) => ({
  rolesFormContainer: {
    maxWidth: 400,
    margin: '0 auto',
    padding: 20,
    border: '1px solid #ccc',
    borderRadius: 5,
    marginTop: 35,
    backgroundColor: 'lightblue',
  },
  formGroup: {
    marginBottom: 15,
  },
  createBtn: {
    backgroundColor: '#4caf50',
    color: '#000',
    padding: '10px 20px',
    marginRight: 10,
    borderRadius: 5,
    '&:hover': {
      backgroundColor: '#388e3c',
    },
  },
  cancelBtn: {
    backgroundColor: '#ffea00',
    color: '#000',
    padding: '10px 20px',
    borderRadius: 5,
    '&:hover': {
      backgroundColor: '#fbc02d',
    },
  },
  formActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: 20,
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
}));

const Roles = () => {
  const classes = useStyles();
  const [rolesName, setRolesName] = useState('');
  const [subDepartment, setSubDepartment] = useState('');
  const [description, setDescription] = useState('');
  const [subDepartmentError, setSubDepartmentError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!rolesName.trim()) {
      alert('Please enter a role name');
      return;
    }

    if (!subDepartment.trim() || subDepartment === 'select sub-department') {
      setSubDepartmentError('Please select a sub-department');
      return;
    }

    if (!description.trim()) {
      alert('Please enter a description');
      return;
    }

    const roleId = uuidv4().substr(0, 8);

    alert(`Role created successfully with ID: ${roleId}`);
    setRolesName('');
    setSubDepartment('');
    setDescription('');
  };

  const handleCancel = () => {
    setRolesName('');
    setSubDepartment('');
    setDescription('');
    setSubDepartmentError('');
  };

  const handleRolesNameChange = (e) => {
    const value = e.target.value.replace(/[^a-zA-Z\s]/g, ''); 
    setRolesName(value.trimStart()); 
  };

  const handleDescriptionChange = (e) => {
    const value = e.target.value.replace(/[^a-zA-Z\s]/g, ''); 
    setDescription(value.trimStart()); 
  };

  return (
    <div className={classes.rolesFormContainer}>
      <Typography variant="h5" align="center" gutterBottom>Create Role</Typography>
      <form onSubmit={handleSubmit}>
        <div className={classes.formGroup}>
          <TextField
            id="rolesName"
            label="Role Name"
            style={{backgroundColor:'white'}}
            value={rolesName}
            onChange={handleRolesNameChange}
            variant="outlined"
            fullWidth
          />
        </div>
        <div className={classes.formGroup}>
        <Select
  id="sub-department"
  value={subDepartment}
  style={{backgroundColor:'white'}}
  onChange={(e) => setSubDepartment(e.target.value)}
  variant="outlined"
  fullWidth
  error={!!subDepartmentError}
>
  <MenuItem value="select sub-department">Select Sub-Department</MenuItem>
  <MenuItem value="Hyderabad">Hyderabad</MenuItem>
  <MenuItem value="Pune">Pune</MenuItem>
  <MenuItem value="Chennai">Chennai</MenuItem>
</Select>
{subDepartmentError && <Typography variant="body2" className={classes.errorText}>{subDepartmentError}</Typography>}

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
        <div className={classes.formActions}>
          <Button type="submit" style={{backgroundColor:'green',color:'black',marginRight:'10px',borderRadius:'7px'}} className={classes.createBtn}>Create</Button>
          <Button type="button" style={{backgroundColor:'yellow',color:'black',borderRadius:'7px'}} className={classes.cancelBtn} onClick={handleCancel}>Cancel</Button>
        </div>
      </form>
    </div>
  );
};

export default Roles;
