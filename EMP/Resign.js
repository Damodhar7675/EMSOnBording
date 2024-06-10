import React, { useState, useEffect } from 'react';
import {
    Container,
    Typography,
    TextField,
    Button,
    Box,
    Grid,
    Paper
} from '@mui/material';

const Resign = () => {
    const [formData, setFormData] = useState({
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
        name: '',
        empId: '',
        designation: '',
        branch: '',
        department: '',
        subDept: '',
        reportingTo: '',
        reasonOfLeaving: '',
        description: ''
    });

    useEffect(() => {
        // Fetch initial user profile data if needed
    }, []);

    const fetchUserProfile = async (name) => {
        try {
            const response = await fetch(`/api/userProfile?name=${name}`);
            const data = await response.json();

            setFormData({
                ...formData,
                name: data.name,
                empId: data.empId,
                designation: data.designation,
                department: data.department,
                branch: data.branch || '',
                subDept: data.subDept || '',
                reportingTo: data.reportingTo || '',
                reasonOfLeaving: '',
                description: ''
            });
        } catch (error) {
            console.error('Error fetching user profile:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'name' && value.length > 0) {
            fetchUserProfile(value);
        }

        if (name === 'description') {
            const words = value.trim().split(/\s+/);
            if (words.length <= 150) {
                setFormData({
                    ...formData,
                    [name]: value
                });
            }
        } else {
            if (value.length <= 16) {
                setFormData({
                    ...formData,
                    [name]: value
                });
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    const handleCancel = () => {
        // Handle form cancellation
        console.log('Form cancelled');
    };

    return (
        <Container component={Paper} sx={{ mt: 5, p: 4, backgroundColor: '#f7f9fc' }}>
            <Typography variant="h4" align="center" gutterBottom>
                RESIGNATION
            </Typography>
            <Typography variant="body1" align="center" color="textSecondary" paragraph>
                Please fill out the form below to submit your resignation.
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body1">Date: {formData.date}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body1">Time: {formData.time}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Emp ID"
                            name="empId"
                            value={formData.empId}
                            onChange={handleChange}
                            InputProps={{ readOnly: true }}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Designation"
                            name="designation"
                            value={formData.designation}
                            onChange={handleChange}
                            InputProps={{ readOnly: true }}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Branch"
                            name="branch"
                            value={formData.branch}
                            onChange={handleChange}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Department"
                            name="department"
                            value={formData.department}
                            onChange={handleChange}
                            InputProps={{ readOnly: true }}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Sub-Dept"
                            name="subDept"
                            value={formData.subDept}
                            onChange={handleChange}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Reporting to"
                            name="reportingTo"
                            value={formData.reportingTo}
                            onChange={handleChange}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Reason of Leaving"
                            name="reasonOfLeaving"
                            value={formData.reasonOfLeaving}
                            onChange={handleChange}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            multiline
                            rows={4}
                            label="Description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            variant="outlined"
                        />
                    </Grid>
                </Grid>
                <Box mt={3} display="flex" justifyContent="flex-end">
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        sx={{ mr: 2 }}
                    >
                        Submit
                    </Button>
                    <Button variant="outlined" color="secondary" onClick={handleCancel}>
                        Cancel
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default Resign;
