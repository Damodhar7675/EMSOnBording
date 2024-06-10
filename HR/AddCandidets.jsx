import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popper from '@mui/material/Popper';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Grid from '@mui/material/Grid';
import { useForm, Controller } from 'react-hook-form';
// import { FormControl, InputLabel } from '@mui/material';
import './AddCandidates.css';
const AddCandidates = () => {
  const { handleSubmit, control, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
   
  };

  return (
    <div >
      <PopupState variant="popper" popupId="demo-popup-popper" >
        {(popupState) => (
          <div>
            <Button className='mr-4' variant="contained" {...bindToggle(popupState)}>
              Add Candidates
            </Button>
            <Popper {...bindPopper(popupState)} transition>
              {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                  <Paper className='dd-adcondi-cont'>
                    <Box
                      component="form"
                      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch', marginLeft:8 } }}
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
                            color="success"
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

    </div>
    
  );
}

export default AddCandidates;
