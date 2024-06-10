
import React, { useState } from 'react';
import { Box, Button, Grid, MenuItem, Select, TextField, Typography, Modal } from '@mui/material';
import jsPDF from 'jspdf';

const Reliving = () => {
  const [selectedForm, setSelectedForm] = useState('relieving');
  const [previewOpen, setPreviewOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    doj: '',
    dateOfResignation: '',
    totalDuration: '',
    conduct: '',
    empEmail: '',
    manager: '',
    designation: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    doj: '',
    dateOfResignation: '',
    totalDuration: '',
    conduct: '',
    empEmail: '',
    manager: '',
    designation: ''
  });

  const resetFormData = () => {
    setFormData({
      name: '',
      doj: '',
      dateOfResignation: '',
      totalDuration: '',
      conduct: '',
      empEmail: '',
      manager: '',
      designation: ''
    });
    setErrors({
      name: '',
      doj: '',
      dateOfResignation: '',
      totalDuration: '',
      conduct: '',
      empEmail: '',
      manager: '',
      designation: ''
    });
  };

  const handleFormChange = (form) => {
    setSelectedForm(form);
    resetFormData();
  };

  const validateField = (name, value) => {
    let errorMessage = '';
    switch (name) {
      case 'name':
        if (!/^[A-Za-z\s]+$/.test(value)) {
          errorMessage = 'Name should contain only alphabets';
        }
        break;
      case 'doj':
      case 'dateOfResignation':
        if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(value)) {
          errorMessage = 'Invalid date format. Use DD/MM/YYYY';
        }
        break;
      case 'totalDuration':
        if (!/^[A-Za-z0-9\s]+$/.test(value)) {
          errorMessage = 'Total Duration should contain only letters and numbers';
        }
        break;
      case 'conduct':
        if (!/^[A-Za-z\s]+$/.test(value)) {
          errorMessage = 'Conduct should contain only alphabets';
        }
        break;
      case 'empEmail':
        if (!/^[A-Za-z0-9._%+-]+@anarghyacomm\.in$/.test(value)) {
          errorMessage = 'Invalid email address. Use correct format (@anarghyacomm.in)';
        }
        break;
      case 'designation':
        if (!/^[A-Za-z\s]+$/.test(value)) {
          errorMessage = 'Designation should contain only alphabets';
        }
        break;
      default:
        break;
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMessage }));
    return errorMessage === '';
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handlePreviewOpen = () => {
    let isValid = true;
    Object.keys(formData).forEach((key) => {
      if (!validateField(key, formData[key])) {
        isValid = false;
      }
    });
    if (isValid) {
      setPreviewOpen(true);
    }
  };

  const handlePreviewClose = () => {
    setPreviewOpen(false);
  };

  const handleGenerateAndSend = () => {
    const doc = new jsPDF();

    if (selectedForm === 'relieving') {
      doc.setFontSize(18);
      doc.text("RELIEVING LETTER", 105, 20, null, null, 'center');

      doc.setFontSize(12);
      const textLines = [
        `This is to certify that ${formData.name} had been working with our organization since ${formData.doj}.`,
        `With reference to his resignation date ${formData.dateOfResignation}, he is therefore relieved from all his official engagements.`,
        `He has been found to be sincere & hardworking, ${formData.conduct}.`,
        "We wish him good luck in his future prospects.",
        "",
        formData.manager,
        formData.designation
      ];

      let yPosition = 60;
      textLines.forEach(line => {
        const splitText = doc.splitTextToSize(line, 180); // Split text to fit within 180 units width
        doc.text(splitText, 20, yPosition);
        yPosition += splitText.length * 10; // Adjust yPosition based on number of lines
      });

      doc.save('Relieving_Letter.pdf');
    } else if (selectedForm === 'noc') {
      doc.setFontSize(18);
      doc.text("NO OBJECTION CERTIFICATE", 105, 20, null, null, 'center');

      doc.setFontSize(12);
      const textLines = [
        `This is to certify that ${formData.name} had been working with our organization since ${formData.doj}.`,
        `With reference to his resignation date ${formData.dateOfResignation}, he is therefore relieved from all his official engagements. We have no objection if he is being employed with any organization.`,
        `He has been found to be sincere & hardworking, ${formData.conduct}.`,
        "We wish him good luck in his future prospects.",
        "",
        formData.manager,
        formData.designation
      ];

      let yPosition = 60;
      textLines.forEach(line => {
        const splitText = doc.splitTextToSize(line, 180); // Split text to fit within 180 units width
        doc.text(splitText, 20, yPosition);
        yPosition += splitText.length * 10; // Adjust yPosition based on number of lines
      });

      doc.save('NOC.pdf');
    }
  };

  const renderPreviewContent = () => {
    if (selectedForm === 'relieving') {
      return (
        <>
          <center><Typography variant="h6" sx={{ mb: 2 }}>Relieving Letter</Typography></center>
          <Box mt={4}>
            <Typography>
              This is to certify that {formData.name} had been working with our organization since {formData.doj}.
            </Typography>
          </Box>
          <Box mt={2}>
            <Typography>
              With reference to his resignation date {formData.dateOfResignation}, he is therefore relieved from all his official engagements.
            </Typography>
          </Box>
          <Box mt={2}>
            <Typography>
              He has been found to be sincere & hardworking, {formData.conduct}.
            </Typography>
          </Box>
          <Box mt={2}>
            <Typography>We wish him good luck in his future prospects.</Typography>
          </Box>
          <Box mt={4}>
            <Typography><sign></sign></Typography>
            <Typography>{formData.manager}</Typography>
            <Typography>{formData.designation}</Typography>
          </Box>
        </>
      );
    } else if (selectedForm === 'noc') {
      return (
        <>
          <center><Typography variant="h6" sx={{ mb: 2 }}>NO OBJECTION CERTIFICATE</Typography></center>
          <Box mt={4}>
            <Typography>
              This is to certify that {formData.name} had been working with our organization since {formData.doj}.
            </Typography>
          </Box>
          <Box mt={2}>
            <Typography>
              With reference to his resignation date {formData.dateOfResignation}, he is therefore relieved from all his official engagements. We have no objection if he is being employed with any organization.
            </Typography>
          </Box>
          <Box mt={2}>
            <Typography>
              He has been found to be sincere & hardworking, {formData.conduct}.
            </Typography>
          </Box>
          <Box mt={2}>
            <Typography>We wish him good luck in his future prospects.</Typography>
          </Box>
          <Box mt={4}>
            <Typography><sign></sign></Typography>
            <Typography>{formData.manager}</Typography>
            <Typography>{formData.designation}</Typography>
          </Box>
        </>
      );
    }
  };

  return (
    <Box sx={{ p: 3, border: '1px solid black', maxWidth: 600, margin: '0 auto' }}>
      <Box sx={{ bgcolor: 'yellow', p: 1, textAlign: 'center', mb: 2 }}>
        <Typography variant="h6">Off-Boarding Documents</Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Button
            fullWidth
            variant="contained"
            onClick={() => handleFormChange('relieving')}
            sx={{ bgcolor: selectedForm === 'relieving' ? 'primary.main' : 'grey.500' }}
          >
            Relieving Letter
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            fullWidth
            variant="contained"
            onClick={() => handleFormChange('noc')}
            sx={{ bgcolor: selectedForm === 'noc' ? 'primary.main' : 'grey.500' }}
          >
            NOC
          </Button>
        </Grid>
      </Grid>

      <Box sx={{ mt: 2 }}>
        <Typography variant="h6">{selectedForm === 'relieving' ? 'Relieving Letter' : 'NOC'}</Typography>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              variant="outlined"
              value={formData.name}
              onChange={handleInputChange}
              error={!!errors.name}
              helperText={errors.name}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Date Of Joining"
              name="doj"
              variant="outlined"
              value={formData.doj}
              onChange={handleInputChange}
              error={!!errors.doj}
              helperText={errors.doj}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Date of Resignation"
              name="dateOfResignation"
              variant="outlined"
              value={formData.dateOfResignation}
              onChange={handleInputChange}
              error={!!errors.dateOfResignation}
              helperText={errors.dateOfResignation}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Total Duration"
              name="totalDuration"
              variant="outlined"
              value={formData.totalDuration}
              onChange={handleInputChange}
              error={!!errors.totalDuration}
              helperText={errors.totalDuration}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Conduct"
              name="conduct"
              variant="outlined"
              value={formData.conduct}
              onChange={handleInputChange}
              error={!!errors.conduct}
              helperText={errors.conduct}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Emp Email "
              name="empEmail"
              variant="outlined"
              value={formData.empEmail}
              onChange={handleInputChange}
              error={!!errors.empEmail}
              helperText={errors.empEmail}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">Approved by</Typography>
            <Select
              fullWidth
              variant="outlined"
              name="manager"
              value={formData.manager}
              onChange={handleInputChange}
              error={!!errors.manager}
            >
              <MenuItem value="" disabled>Select Manager name</MenuItem>
              <MenuItem value="manager1">Manager 1</MenuItem>
              <MenuItem value="manager2">Manager 2</MenuItem>
            </Select>
            {errors.manager && <Typography color="error">{errors.manager}</Typography>}
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Designation"
              name="designation"
              variant="outlined"
              value={formData.designation}
              onChange={handleInputChange}
              error={!!errors.designation}
              helperText={errors.designation}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={6}>
            <Button fullWidth variant="contained" onClick={handlePreviewOpen}>Preview</Button>
          </Grid>
          <Grid item xs={6}>
            <Button fullWidth variant="contained" color="success" onClick={handleGenerateAndSend}>Generate & Send</Button>
          </Grid>
        </Grid>
      </Box>

      <Modal open={previewOpen} onClose={handlePreviewClose}>
        <Box sx={{ p: 4, border: '1px solid black', maxWidth: 600, margin: '0 auto', mt: 4, bgcolor: 'background.paper' }}>
          {renderPreviewContent()}
          <Box mt={4} textAlign="center">
            <Button variant="contained" onClick={handlePreviewClose}>Close Preview</Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Reliving;

