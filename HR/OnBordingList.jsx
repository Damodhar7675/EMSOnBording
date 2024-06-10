import React, { useState } from 'react';
import { Container, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, Typography, Paper, Grid, Popper, Box, Tooltip, TextField } from '@mui/material';
import './OnBordingList'
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import { Fade } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';

const OnBordingList = () => {
  const [selectedCandidate, setSelectedCandidate] = useState('');

  const candidates = [
    { name: 'Damodar', designation: 'developer', ctc: '3lp', mobile: '7675088...', email: 'damu54@gmail.com', address: 'Hyderabad', aadhar: '867564347811', joiningDate: '10/2/2023', url: 'https://profilelink.ca/login.aspx?ReturnUrl=%2f' },
    { name: 'Ramu', designation: 'tester', ctc: '2.7lp', mobile: '978676...', email: 'Ramu45@gmail.com', address: 'Telangan', aadhar: '', joiningDate: '10/2/2023', url: 'https://profilelink.ca/login.aspx?ReturnUrl=%2f' },
    { name: 'Krishna', designation: 'developer', ctc: '3lp', mobile: '9056764', email: 'krishan676@gmail.com', address: 'Ap', aadhar: '88786889011', joiningDate: '3/1/2024', url: 'https://profilelink.ca/login.aspx?ReturnUrl=%2f' },
    { name: 'Ravi', designation: 'aws', ctc: '4lp', mobile: '7746644', email: 'ravi66@gmail.com', address: 'Hyderabad', aadhar: '898754355611', joiningDate: '9/8/2023', url: 'https://profilelink.ca/login.aspx?ReturnUrl=%2f' },
    { name: 'Shiva', designation: 'developer', ctc: '3lp', mobile: '99977393', email: 'shiva45@gmail.com', address: 'Sr Nager', aadhar: '87876449897765411', joiningDate: '2/3/2024', url: 'https://profilelink.ca/login.aspx?ReturnUrl=%2f' },
    { name: 'Praveen', designation: 'developer', ctc: '3.8lp', mobile: '7474367', email: 'Praveen4@gmail.com', address: 'Ameerpet', aadhar: '809765323556711', joiningDate: '10/3/2023', url: 'http://localhost:3000/HrDashbord' }
  ];

  const handleRemoveClick = () => {
    alert(`Remove ${selectedCandidate} Details`);
  };
  const handilEditClick = () => {
    alert( `Edit ${selectedCandidate} Details`);
  };
  const { handleSubmit, control, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="content flex-grow-1 p-3" style={{ marginTop: '60px' }}>
      <Container>
        <br />
        <Grid container spacing={2} style={{ marginBottom: '20px' }}>
          {/* Add Candidates */}
          <PopupState variant="popper" popupId="demo-popup-popper">
            {(popupState) => (
              <div>
                <Button className='mt-3' variant="contained" {...bindToggle(popupState)}>
                  Add Candidates
                </Button>
                <Popper {...bindPopper(popupState)} transition>
                  {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                      <Paper className='dd-adcondi-cont'>
                        <Box
                          component="form"
                          sx={{ '& .MuiTextField-root': { m: 1, width: '25ch', marginLeft: 8 } }}
                          noValidate
                          autoComplete="off"
                          onSubmit={handleSubmit(onSubmit)}
                        >
                          <Grid container justifyContent="center">
                            <Grid item>
                              <Typography variant='h4'>Add Candidate</Typography>
                            </Grid>
                          </Grid>
                          <br />
                          <Grid container spacing={2}>
                            <Grid item xs={6}>
                              <Controller
                                name="name"
                                control={control}
                                defaultValue=""
                                rules={{ required: "Name is required" }}
                                render={({ field }) => (
                                  <Tooltip title="Name" placement="left-start">
                                    <TextField
                                      {...field}
                                      label="Name"
                                      variant="standard"
                                      error={!!errors.name}
                                      helperText={errors.name ? errors.name.message : ''}
                                    />
                                  </Tooltip>
                                )}
                              />
                              <Controller
                                name="designation"
                                control={control}
                                defaultValue=""
                                rules={{ required: "Designation is required" }}
                                render={({ field }) => (
                                  <Tooltip title="Designation" placement="left">
                                    <TextField
                                      {...field}
                                      label="Designation"
                                      variant="standard"
                                      error={!!errors.designation}
                                      helperText={errors.designation ? errors.designation.message : ''}
                                    />
                                  </Tooltip>
                                )}
                              />
                              <Controller
                                name="ctc"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                  <Tooltip title="CTC" placement="left-end">
                                    <TextField
                                      {...field}
                                      label="CTC"
                                      type="number"
                                      InputLabelProps={{ shrink: true }}
                                      variant="standard"
                                    />
                                  </Tooltip>
                                )}
                              />
                            </Grid>
                            <Grid item xs={6}>
                              <Controller
                                name="email"
                                control={control}
                                defaultValue=""
                                rules={{ required: "Email is required", pattern: { value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, message: "Invalid email address" } }}
                                render={({ field }) => (
                                  <Tooltip title="Email" arrow>
                                    <TextField
                                      {...field}
                                      label="Email"
                                      type="email"
                                      InputLabelProps={{ shrink: true }}
                                      variant="standard"
                                      error={!!errors.email}
                                      helperText={errors.email ? errors.email.message : ''}
                                    />
                                  </Tooltip>
                                )}
                              />
                              <Controller
                                name="mobile"
                                control={control}
                                defaultValue=""
                                rules={{ required: "Mobile number is required", pattern: { value: /^[0-9]{10}$/, message: "Invalid mobile number" } }}
                                render={({ field }) => (
                                  <Tooltip title="Mobile Number" arrow>
                                    <TextField
                                      {...field}
                                      label="Mobile Number"
                                      type="text"
                                      InputLabelProps={{ shrink: true }}
                                      variant="standard"
                                      error={!!errors.mobile}
                                      helperText={errors.mobile ? errors.mobile.message : ''}
                                    />
                                  </Tooltip>
                                )}
                              />
                              <Controller
                                name="address"
                                control={control}
                                defaultValue=""
                                rules={{ required: "Address is required" }}
                                render={({ field }) => (
                                  <Tooltip title="Address" arrow>
                                    <TextField
                                      {...field}
                                      label="Address"
                                      variant="standard"
                                      error={!!errors.address}
                                      helperText={errors.address ? errors.address.message : ''}
                                    />
                                  </Tooltip>
                                )}
                              />
                            </Grid>
                          </Grid>
                          <Grid container spacing={2}>
                            <Grid item xs={6}>
                              <Controller
                                name="aadher"
                                control={control}
                                defaultValue=""
                                rules={{ required: "Aadher number is required", pattern: { value: /^[0-9]{12}$/, message: "Invalid Aadher number" } }}
                                render={({ field }) => (
                                  <Tooltip title="Aadher Number" placement="right-start">
                                    <TextField
                                      {...field}
                                      label="Aadher Number"
                                      type="text"
                                      InputLabelProps={{ shrink: true }}
                                      variant="standard"
                                      error={!!errors.aadher}
                                      helperText={errors.aadher ? errors.aadher.message : ''}
                                    />
                                  </Tooltip>
                                )}
                              />
                              <Controller
                                name="joiningDate"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                  <Tooltip title="Joining Date" placement="right">
                                    <TextField
                                      {...field}
                                      label="Joining Date"
                                      type="date"
                                      InputLabelProps={{ shrink: true }}
                                      variant="standard"
                                    />
                                  </Tooltip>
                                )}
                              />
                              <Controller
                                name="url"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                  <Tooltip title="URL" placement="right-end">
                                    <TextField
                                      {...field}
                                      label="URL"
                                      type="url"
                                      variant="standard"
                                    />
                                  </Tooltip>
                                )}
                              />
                            </Grid>
                          </Grid>
                          <Grid container justifyContent="center" spacing={2}>
                            <Grid item>
                              <Tooltip title="Save" placement="bottom-end">
                                <Button className='m-1' type="submit" variant="contained" color="success">
                                  Save
                                </Button>
                              </Tooltip>
                              <Tooltip title="Cancel" placement="bottom-end">
                                <Button className='m-1' variant="outlined" color="error" {...bindToggle(popupState)}>
                                  Cancel
                                </Button>
                              </Tooltip>
                            </Grid>
                          </Grid>
                        </Box>
                      </Paper>
                    </Fade>
                  )}
                </Popper>
              </div>
            )}
          </PopupState>

          <Grid item>
            <Button variant="contained" color="error" onClick={handleRemoveClick} disabled={!selectedCandidate}>
              Remove
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" onClick={handilEditClick} disabled={!selectedCandidate}>
              Edit
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="secondary">
              Send
            </Button>
          </Grid>
        </Grid>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Select</TableCell>
                <TableCell>Name of Candidate</TableCell>
                <TableCell>Designation</TableCell>
                <TableCell>CTC</TableCell>
                <TableCell>Mobile</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Aadhar #</TableCell>
                <TableCell>Joining Date</TableCell>
                <TableCell>URL</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {candidates.map((candidate, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Checkbox 
                      checked={selectedCandidate === candidate.name}
                      onChange={(e) => setSelectedCandidate(e.target.checked ? candidate.name : '')}
                    />
                  </TableCell>
                  <TableCell>{candidate.name}</TableCell>
                  <TableCell>{candidate.designation}</TableCell>
                  <TableCell>{candidate.ctc}</TableCell>
                  <TableCell>{candidate.mobile}</TableCell>
                  <TableCell>{candidate.email}</TableCell>
                  <TableCell>{candidate.address}</TableCell>
                  <TableCell>{candidate.aadhar}</TableCell>
                  <TableCell>{candidate.joiningDate}</TableCell>
                  <TableCell><a href={candidate.url} target="_blank" rel="noopener noreferrer">Profile Link</a></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <br />
        <Grid item container xs={6} alignItems="flex-end"  direction="column">
            <Grid item>
                <Tooltip title="Add" placement="right-end">
                <Button variant="contained" style={{marginRight:"8px"}} color="success">Submit</Button>
                <Button variant="contained"> Cancel </Button>
                </Tooltip>
            </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default OnBordingList;
