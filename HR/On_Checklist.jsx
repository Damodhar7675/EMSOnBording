import React from 'react';
import { Box, Container, TextField, Typography, Button, Grid, Paper, Checkbox, FormControlLabel } from '@mui/material';

const On_Checklist = () => {
  return (
    <Container>
      <Paper elevation={3} style={{ padding: 16, marginTop: 16 }}>
        <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
          <Typography variant="h5" style={{ backgroundColor: 'yellow', padding: 8 }}>Checklist</Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField fullWidth label="Name" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField fullWidth label="Deg" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField fullWidth label="Emp ID" variant="outlined" />
          </Grid>
        </Grid>
        <Box sx={{ marginTop: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FormControlLabel control={<Checkbox />} label="Knowledge Transfer" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>Soft Dev</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControlLabel control={<Checkbox />} label="Asset Recovery" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>IT</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControlLabel control={<Checkbox />} label="System Access" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>IT</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControlLabel control={<Checkbox />} label="FnF" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>Acct</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControlLabel control={<Checkbox />} label="Department NOC" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>IT</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControlLabel control={<Checkbox />} label="Exit Interview" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>HR</Typography>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ textAlign: 'center', marginTop: 2 }}>
          <Button variant="contained" color="primary">Submit</Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default On_Checklist;
