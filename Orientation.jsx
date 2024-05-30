import { Container, Grid, TextField, Typography, Box, Button, List, ListItem, ListItemText, IconButton } from '@mui/material';
import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import './Orientation.css';

const dummyEmails = [
    'example1@example.com', 'example2@example.com', 'example3@example.com', 
    'example4@example.com', 'example5@example.com', 'example6@example.com', 
    'example7@example.com', 'example8@example.com', 'example9@example.com', 
    'example10@example.com'
];

const Orientation = () => {
  const [fields, setFields] = useState([
    { startTime: '', endTime: '', place: '', activity: '' }
  ]);

  const handleAddFields = () => {
    setFields([...fields, { startTime: '', endTime: '', place: '', activity: '' }]);
  };

  const handleChange = (index, event) => {
    const newFields = fields.map((field, i) => {
      if (index === i) {
        return { ...field, [event.target.name]: event.target.value };
      }
      return field;
    });
    setFields(newFields);
  };

  const [selectedEmails, setSelectedEmails] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAddEmail = (email) => {
    if (!selectedEmails.includes(email)) {
      setSelectedEmails([...selectedEmails, email]);
    }
  };

  const handleRemoveEmail = (email) => {
    setSelectedEmails(selectedEmails.filter(item => item !== email));
  };

  const filteredEmails = dummyEmails.filter(email => 
    email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Box className='dd-Orient-container' sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant='h4' gutterBottom>
          Orientation
        </Typography>
        <TextField
          label="Date"
          type='date'
          InputLabelProps={{ shrink: true }}
          sx={{ mb: 4, width: '80%' }}
        />
        {fields.map((field, index) => (
          <Box key={index} sx={{ mb: 4 }}>
            <Typography variant='h6' gutterBottom>
              Activity {index + 1}
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                <TextField
                  label="Start Time"
                  name="startTime"
                  type='time'
                  value={field.startTime}
                  onChange={event => handleChange(index, event)}
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  label="End Time"
                  name="endTime"
                  type='time'
                  value={field.endTime}
                  onChange={event => handleChange(index, event)}
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  label="Place"
                  name="place"
                  type='text'
                  value={field.place}
                  onChange={event => handleChange(index, event)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  label="Activity"
                  name="activity"
                  type='text'
                  value={field.activity}
                  onChange={event => handleChange(index, event)}
                  fullWidth
                />
              </Grid>
            </Grid>
          </Box>
        ))}
        <Button variant="contained" color="primary" onClick={handleAddFields}>
          Add Activity
        </Button>
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant='h6' gutterBottom>
            Search and Select Emails
          </Typography>
          <TextField
            label="Search Email"
            variant="outlined"
            fullWidth
            value={searchTerm}
            onChange={handleSearchChange}
            sx={{ mb: 2 }}
          />
          <List sx={{ maxHeight: 200, overflow: 'auto',backgroundColor:'white' }}>
            {filteredEmails.slice(0, 4).map((email, index) => (
              <ListItem key={index} button onClick={() => handleAddEmail(email)}>
                <ListItemText primary={email} />
              </ListItem>
            ))}
          </List>
          <Typography variant='h6' gutterBottom sx={{ mt: 2 }}>
            Added Emails
          </Typography>
          <List>
            {selectedEmails.map((email, index) => (
              <ListItem key={index} secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={() => handleRemoveEmail(email)}>
                  <DeleteIcon />
                </IconButton>
              }>
                <ListItemText primary={email} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Container>
  );
};

export default Orientation;
