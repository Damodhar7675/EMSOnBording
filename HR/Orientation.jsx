
// import React, { useState } from 'react';
// import {
//   Container, Grid, TextField, Typography, Box, Button, ListItemText, IconButton,
//   List,
//   ListItem
// } from '@mui/material';
// import { jsPDF } from 'jspdf';
// import 'jspdf-autotable';
// import './Orientation.css';
// import DeleteIcon from '@mui/icons-material/Delete';



// const dummyEmails = [
//     'example1@example.com', 'example2@example.com', 'example3@example.com', 
//     'example4@example.com', 'example5@example.com', 'example6@example.com', 
//     'example7@example.com', 'example8@example.com', 'example9@example.com', 
//     'example10@example.com'
// ];

// const Orientation = () => {

    

//   const [fields, setFields] = useState([{ startTime: '', endTime: '', place: '', activity: '' }]);
//   const [date, setDate] = useState('');

//   const handleAddFields = () => {
//     setFields([...fields, { startTime: '', endTime: '', place: '', activity: '' }]);
//   };

//   const handleChange = (index, event) => {
//     const newFields = fields.map((field, i) => {
//       if (index === i) {
//         return { ...field, [event.target.name]: event.target.value };
//       }
//       return field;
//     });
//     setFields(newFields);
//   };

//   const handleDateChange = (event) => {
//     setDate(event.target.value);
//   };

//   const validateTimes = (fields) => {
//     for (const field of fields) {
//       if (field.startTime >= field.endTime) {
//         return false; 
//       }
//     }
//     return true;
//   };

//   const handleGeneratePDF = () => {
//     if (!validateTimes(fields)) {
//       console.error("There are timing conflicts in the fields.");
//       return;
//     }

//     const pdf = new jsPDF('portrait', 'mm', 'letter');

//     const backgroundImg = '';
//     const logoImg = 'https://static.wixstatic.com/media/2fb119_4327c307dbed4d0599105cd67865131b~mv2.png';

//     pdf.addImage(backgroundImg, 'JPEG', 0, 0, 215, 280);
//     pdf.addImage(logoImg, 'PNG', 10, 20, 40, 20);

//     pdf.setFontSize(20);
//     pdf.text("Anarghya Comounication",60, 30);
//     pdf.setFontSize(16);
//     pdf.setTextColor(40, 40, 40);
//     pdf.text("Orientation Schedule", 10, 60);
//     pdf.text(`Date: ${date}`, 10, 70);

    
//     const tableColumn = ["Start Time", "End Time", "Place", "Activity"];
//     const tableRows = [];

//     fields.forEach(field => {
//       const fieldData = [
//         field.startTime,
//         field.endTime,
//         field.place,
//         field.activity,
//       ];
//       tableRows.push(fieldData);
//     });

//     pdf.autoTable({
//       head: [tableColumn],
//       body: tableRows,
//       startY: 80,
//       theme: 'grid',
//     });

   
//     const finalY = pdf.previousAutoTable.finalY + 10; 
//     pdf.setFontSize(14);
//     pdf.text("Important Notes:", 10, finalY);
//     pdf.setFontSize(12);
//     pdf.text("1. Please be on time for all activities.", 10, finalY + 10);
//     pdf.text("2. Follow the instructions of your group leaders.", 10, finalY + 20);
//     pdf.text("3. Have fun and make the most of this orientation!", 10, finalY + 30);

//     pdf.save('orientation.pdf');
//   };

  


//   const [selectedEmails, setSelectedEmails] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleAddEmail = (email)=> {
//     if (!selectedEmails.includes(email)) {
//       setSelectedEmails([...selectedEmails, email]);
//     }
//   };

//   const handleRemoveEmail = (email)=> {
//     setSelectedEmails(selectedEmails.filter(item => item !== email));
//   };

//   const filteredEmails = dummyEmails.filter(email => 
//     email.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <Container>
//       <Box className='dd-Orient-container' sx={{ textAlign: 'center', mt: 4, }}>
//         <Typography variant='h4' gutterBottom>
//            Orientation
//         </Typography>
//         <TextField
//           label="Date"
//           type='date'
//           sx={{backgroundColor:"white", mb: 4, width: '80%', boxShadow: 3}}
//           InputLabelProps={{ shrink: true }}
        
//           value={date}
//           onChange={handleDateChange}
//         />
//         {fields.map((field, index) => (
//           <Box key={index} sx={{ mb: 4 }}>
//             <Grid container spacing={2}>
//               <Grid item xs={12} md={3}>
//                 <TextField
//                   label="Start Time"
//                   name="startTime"
//                   type='time'
//                   sx={{backgroundColor:"white", boxShadow: 3}}
//                   value={field.startTime}
//                   onChange={event => handleChange(index, event)}
//                   InputLabelProps={{ shrink: true }}
//                   fullWidth
//                 />
//               </Grid>
//               <Grid item xs={12} md={3}>
//                 <TextField
//                   label="End Time"
//                   name="endTime"
//                   type='time'
//                   sx={{backgroundColor:"white", boxShadow: 3}}
//                   value={field.endTime}
//                   onChange={event => handleChange(index, event)}
//                   InputLabelProps={{ shrink: true }}
//                   fullWidth
//                 />
//               </Grid>
//               <Grid item xs={12} md={3}>
//                 <TextField
//                   label="Place"
//                   name="place"
//                   type='text'
//                   sx={{backgroundColor:"white", boxShadow: 3}}
//                   value={field.place}
//                   onChange={event => handleChange(index, event)}
//                   fullWidth
//                 />
//               </Grid>
//               <Grid item xs={12} md={3}>
//                 <TextField
//                   label="Activity"
//                   name="activity"
//                   type='text'
//                   sx={{backgroundColor:"white", boxShadow: 3}}
//                   value={field.activity}
//                   onChange={event => handleChange(index, event)}
//                   fullWidth
//                 />
//               </Grid>
//             </Grid>
//           </Box>
//         ))}
//         <Button className='ml-3' variant="contained" color="primary" onClick={handleAddFields} sx={{ mt: 2, mr: 2 }}>
//           Add Activity
//         </Button>
//         <Button  variant="contained" color="primary" onClick={handleGeneratePDF} sx={{ mt: 2 }}>
//           Generate PDF
//         </Button>

//         <Box sx={{ textAlign: 'center', mt: 4 }}>
//             <Grid container spacing={4} >
//                 <Grid item xs={6} md={5} sx={{mr:5}}>
//                     <Typography variant='h6' gutterBottom>
//                         Search and Select Emails
//                     </Typography>
//                     <TextField
//                         label="Search Email"
//                         variant="outlined"
//                         fullWidth
//                         value={searchTerm}
//                         onChange={handleSearchChange}
//                         sx={{ mb: 2, backgroundColor: "white", boxShadow: 3 }}
//                     />
//                     <List sx={{ maxHeight: 200, overflow: 'auto',backgroundColor:'white', boxShadow: 3, border: 1 }}>
//                         {filteredEmails.slice(0, 4).map((email, index) => (
//                         <ListItem key={index} button onClick={() => handleAddEmail(email)}>
//                             <ListItemText primary={email} />
//                         </ListItem>
//                         ))}
//                     </List>
//                 </Grid>
//                 <Grid item xs={6} md={5}>
//                     <Typography variant='h6' gutterBottom sx={{ mt: 2 }}>
//                         Added Emails
//                     </Typography>
//                     <List sx={{ maxHeight: 200, mt:4, overflow: 'auto',backgroundColor:'white', boxShadow: 3, border: 1 }}>
//                         {selectedEmails.map((email, index) => (
//                         <ListItem key={index} secondaryAction={
//                             <IconButton edge="end" aria-label="delete" onClick={() => handleRemoveEmail(email)}>
//                             <DeleteIcon />
//                             </IconButton>
//                         }>
//                             <ListItemText primary={email} />
//                         </ListItem>
//                         ))}
//                     </List>
//                 </Grid>
//             </Grid>
//         </Box>
//         <Button sx={{mt:2}} variant="contained" color="primary" >
//           Send
//         </Button>
        

//       </Box>
//     </Container>
//   );
// };

// export default Orientation;

import React, { useState } from 'react';
import {  Container, Grid, TextField, Typography, Box, Button, ListItemText, IconButton,  List,  ListItem,  Alert,  Snackbar} from '@mui/material';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import './Orientation.css';
import DeleteIcon from '@mui/icons-material/Delete';

const dummyEmails = [
     'silaboinadamodhar767@gmail.com','sai@example.com', 'Ramu@example.com', 'example3@example.com', 
    'example4@example.com', 'example5@example.com', 'example6@example.com', 
    'example7@example.com', 'example8@example.com', 'example9@example.com', 
    'example10@example.com'
];

const Orientation = () => {
  const [fields, setFields] = useState([{ startTime: '', endTime: '', place: '', activity: '' }]);
  const [date, setDate] = useState('');
  const [alert, setAlert] = useState({ open: false, message: '', severity: 'success' });

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

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const validateTimes = (fields) => {
    for (const field of fields) {
      if (field.startTime >= field.endTime) {
        return false; 
      }
    }
    return true;
  };

  const areAllFieldsFilled = (fields, date) => {
    if (!date) return false;
    for (const field of fields) {
      if (!field.startTime || !field.endTime || !field.place || !field.activity) {
        return false;
      }
    }
    return true;
  };

  const handleGeneratePDF = () => {
    if (!areAllFieldsFilled(fields, date)) {
      setAlert({ open: true, message: 'Please fill in all fields before generating the PDF.', severity: 'error' });
      return;
    }
    
    // if (!validateTimes(fields)) {
    //   setAlert({ open: true, message: 'End time must be after start time for all activities.', severity: 'error' });
    //   return;
    // }

    const pdf = new jsPDF('portrait', 'mm', 'letter');

    const backgroundImg = '';
    const logoImg = 'https://static.wixstatic.com/media/2fb119_4327c307dbed4d0599105cd67865131b~mv2.png';

    pdf.addImage(backgroundImg, 'JPEG', 0, 0, 215, 280);
    pdf.addImage(logoImg, 'PNG', 10, 20, 40, 20);

    pdf.setFontSize(20);
    pdf.text("Anarghya Comounication", 60, 30);
    pdf.setFontSize(16);
    pdf.setTextColor(40, 40, 40);
    pdf.text("Orientation Schedule", 10, 60);
    pdf.text(`Date: ${date}`, 10, 70);

    const tableColumn = ["Start Time", "End Time", "Place", "Activity"];
    const tableRows = [];

    fields.forEach(field => {
      const fieldData = [
        field.startTime,
        field.endTime,
        field.place,
        field.activity,
      ];
      tableRows.push(fieldData);
    });

    pdf.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 80,
      theme: 'grid',
    });

    const finalY = pdf.previousAutoTable.finalY + 10; 
    pdf.setFontSize(14);
    pdf.text("Important Notes:", 10, finalY);
    pdf.setFontSize(12);
    pdf.text("1. Please be on time for all activities.", 10, finalY + 10);
    pdf.text("2. Follow the instructions of your group leaders.", 10, finalY + 20);
    pdf.text("3. Have fun and make the most of this orientation!", 10, finalY + 30);

    pdf.save('orientation.pdf');
    setAlert({ open: true, message: 'PDF generated successfully!', severity: 'success' });
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
      <Box className='dd-Orient-container' sx={{ textAlign: 'center', mt: 4, }}>
        <Typography variant='h4' gutterBottom>
           Orientation
        </Typography>
        <TextField
          label="Date"
          type='date'
          sx={{backgroundColor:"white", mb: 4, width: '80%', boxShadow: 3}}
          InputLabelProps={{ shrink: true }}
          value={date}
          onChange={handleDateChange}
        />
        {fields.map((field, index) => (
          <Box key={index} sx={{ mb: 4 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                <TextField
                  label="Start Time"
                  name="startTime"
                  type='time'
                  sx={{backgroundColor:"white", boxShadow: 3}}
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
                  sx={{backgroundColor:"white", boxShadow: 3}}
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
                  sx={{backgroundColor:"white", boxShadow: 3}}
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
                  sx={{backgroundColor:"white", boxShadow: 3}}
                  value={field.activity}
                  onChange={event => handleChange(index, event)}
                  fullWidth
                />
              </Grid>
            </Grid>
          </Box>
        ))}
        <Button className='ml-3' variant="contained" color="primary" onClick={handleAddFields} sx={{ mt: 2, mr: 2 }}>
          Add Activity
        </Button>
        <Button  variant="contained" color="primary" onClick={handleGeneratePDF} sx={{ mt: 2 }}>
          Generate PDF
        </Button>

        <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Grid container spacing={4} >
                <Grid item xs={6} md={5} sx={{mr:5}}>
                    <Typography variant='h6' gutterBottom>
                        Search and Select Emails
                    </Typography>
                    <TextField
                        label="Search Email"
                        variant="outlined"
                        fullWidth
                        value={searchTerm}
                        onChange={handleSearchChange}
                        sx={{ mb: 2, backgroundColor: "white", boxShadow: 3 }}
                    />
                    <List sx={{ maxHeight: 200, overflow: 'auto',backgroundColor:'white', boxShadow: 3, border: 1 }}>
                        {filteredEmails.slice(0, 4).map((email, index) => (
                        <ListItem key={index} button onClick={() => handleAddEmail(email)}>
                            <ListItemText primary={email} />
                        </ListItem>
                        ))}
                    </List>
                </Grid>
                <Grid item xs={6} md={5}>
                    <Typography variant='h6' gutterBottom sx={{ mt: 2 }}>
                        Added Emails
                    </Typography>
                    <List sx={{ maxHeight: 200, mt:4, overflow: 'auto',backgroundColor:'white', boxShadow: 3, border: 1 }}>
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
                </Grid>
            </Grid>
        </Box>
        <Button sx={{mt:2}} variant="contained" color="primary" >
          Send
        </Button>

        <Snackbar open={alert.open} autoHideDuration={6000} onClose={() => setAlert({ ...alert, open: false })}>
          <Alert onClose={() => setAlert({ ...alert, open: false })} severity={alert.severity}>
            {alert.message}
          </Alert>
        </Snackbar>
      </Box>
    </Container>
  );
};

export default Orientation;


