import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function On_requestForm() {
  // State for existing fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [academics, setAcademics] = useState('');
  const [professional, setProfessional] = useState('');
  const [experience, setExperience] = useState('');
  const [aadharId, setAadharId] = useState('');
  const [panCard, setPanCard] = useState('');
  const [addressProof, setAddressProof] = useState(null);
  const [experienceCertificates, setExperienceCertificates] = useState(null);
  const [noc, setNoc] = useState(null);
  const [resume, setResume] = useState(null);
  const [otherDocument, setOtherDocument] = useState(null);
  const [certificate, setCertificate] = useState(null);
  const [ctc, setCtc] = useState('');
  const [designation, setDesignation] = useState('');
  const [approved, setApproved] = useState(false);
  const [rejected, setRejected] = useState(false);
  const [accountStatus, setAccountStatus] = useState('');

  // State for new fields
  const [branch, setBranch] = useState('');
  const [department, setDepartment] = useState('');
  const [subDepartment, setSubDepartment] = useState('');
  const [role, setRole] = useState('');
  const [reportingTo, setReportingTo] = useState('');
  const [training, setTraining] = useState('');
  const [probationFrom, setProbationFrom] = useState('');
  const [probationTo, setProbationTo] = useState('');
  const [requestsEmail, setRequestsEmail] = useState('');
  const [requestsIT, setRequestsIT] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      // Your existing state variables
      name,
      email,
      mobile,
      gender,
      address,
      academics,
      professional,
      experience,
      aadharId,
      panCard,
      addressProof,
      experienceCertificates,
      noc,
      resume,
      otherDocument,
      certificate,
      ctc,
      designation,
      approved,
      rejected,
      accountStatus,
      // New state variables
      branch,
      department,
      subDepartment,
      role,
      reportingTo,
      training,
      probationFrom,
      probationTo,
      requestsEmail,
      requestsIT,
    });
  };

  const handleAddressProofChange = (event) => {
    setAddressProof(event.target.files[0]);
  };

  const handleExperienceCertificatesChange = (event) => {
    setExperienceCertificates(event.target.files[0]);
  };

  const handleNocChange = (event) => {
    setNoc(event.target.files[0]);
  };

  const handleResumeChange = (event) => {
    setResume(event.target.files[0]);
  };

  const handleOtherDocumentChange = (event) => {
    setOtherDocument(event.target.files[0]);
  };

  const handleCertificateChange = (event) => {
    setCertificate(event.target.files[0]);
  };

  const handleApprovedChange = (event) => {
    setApproved(event.target.checked);
    setRejected(!event.target.checked);
  };

  const handleRejectedChange = (event) => {
    setRejected(event.target.checked);
    setApproved(!event.target.checked);
  };

  return (
    <Box sx={{
      m: 2,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <Typography variant="h4" gutterBottom>Employee Onboarding Request Form</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              required
              fullWidth
              id="name"
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              fullWidth
              id="mobile"
              label="Mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel id="gender-select-label">Gender</InputLabel>
              <Select
                labelId="gender-select-label"
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <MenuItem value={'Male'}>Male</MenuItem>
                <MenuItem value={'Female'}>Female</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="address"
              label="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="academics"
              label="Academics"
              value={academics}
              onChange={(e) => setAcademics(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              fullWidth
              id="professional"
              label="Professional"
              value={professional}
              onChange={(e) => setProfessional(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              fullWidth
              id="experience"
              label="Experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              fullWidth
              id="aadharId"
              label="Aadhar Id"
              value={aadharId}
              onChange={(e) => setAadharId(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              fullWidth
              id="panCard"
              label="Pan Card"
              value={panCard}
              onChange={(e) => setPanCard(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <input
              type="file"
              id="addressProof"
              accept="image/*"
              onChange={handleAddressProofChange}
            />
            <label htmlFor="addressProof">Address Proof (if not same as aadhar)</label>
          </Grid>
          <Grid item xs={12}>
            <input
              type="file"
              id="experienceCertificates"
              accept="image/*"
              onChange={handleExperienceCertificatesChange}
            />
            <label htmlFor="experienceCertificates">Experience Certificates</label>
          </Grid>
          <Grid item xs={12}>
            <input
              type="file"
              id="noc"
              accept="image/*"
              onChange={handleNocChange}
            />
            <label htmlFor="noc">NOC</label>
          </Grid>
          <Grid item xs={12}>
            <input
              type="file"
              id="resume"
              accept="image/*"
              onChange={handleResumeChange}
            />
            <label htmlFor="resume">Resume/CV</label>
          </Grid>
          <Grid item xs={12}>
            <input
              type="file"
              id="otherDocument"
              accept="image/*"
              onChange={handleOtherDocumentChange}
            />
            <label htmlFor="otherDocument">Other Document</label>
          </Grid>
          <Grid item xs={12}>
            <input
              type="file"
              id="certificate"
              accept="image/*"
              onChange={handleCertificateChange}
            />
            <label htmlFor="certificate">Certificate</label>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              fullWidth
              id="ctc"
              label="CTC"
              value={ctc}
              onChange={(e) => setCtc(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              fullWidth
              id="designation"
              label="Designation"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="accountStatus-select-label">Account Status</InputLabel>
              <Select
                labelId="accountStatus-select-label"
                id="accountStatus"
                value={accountStatus}
                onChange={(e) => setAccountStatus(e.target.value)}
              >
                <MenuItem value={'Active'}>Active</MenuItem>
                <MenuItem value={'Inactive'}>Inactive</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              fullWidth
              id="branch"
              label="Branch"
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              fullWidth
              id="department"
              label="Department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              fullWidth
              id="subDepartment"
              label="Sub-Department"
              value={subDepartment}
              onChange={(e) => setSubDepartment(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              fullWidth
              id="role"
              label="Role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              fullWidth
              id="reportingTo"
              label="Reporting To"
              value={reportingTo}
              onChange={(e) => setReportingTo(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              fullWidth
              id="training"
              label="Training"
              value={training}
              onChange={(e) => setTraining(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              fullWidth
              id="probationFrom"
              label="Probation From"
              type="date"
              value={probationFrom}
              onChange={(e) => setProbationFrom(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              fullWidth
              id="probationTo"
              label="Probation To"
              type="date"
              value={probationTo}
              onChange={(e) => setProbationTo(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              fullWidth
              id="requestsEmail"
              label="Requests Email"
              value={requestsEmail}
              onChange={(e) => setRequestsEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              fullWidth
              id="requestsIT"
              label="Requests IT"
              value={requestsIT}
              onChange={(e) => setRequestsIT(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained">Submit</Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default On_requestForm;
