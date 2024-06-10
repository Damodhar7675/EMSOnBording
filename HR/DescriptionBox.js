// import React, { useState } from 'react';

// const DescriptionBox = () => {
//   const [description, setDescription] = useState('');
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     const text = e.target.value;
//     const wordCount = text.split(/\s+/).filter(word => word).length;

//     if (wordCount <= 150) {
//       setDescription(text);
//       setError('');
//     } else {
//       setError('Description cannot exceed 150 words.');
//     }
//   };

//   return (
//     <div>
//       <textarea
//         value={description}
//         onChange={handleChange}
//         placeholder="Enter your description (up to 150 words)"
//         rows="10"
//         cols="50"
//       />
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//     </div>
//   );
// };

// export default DescriptionBox;

import React, { useState } from 'react';
import { TextField, Typography, Box } from '@mui/material';
import { Button } from 'react-bootstrap';

const DescriptionBox = () => {
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const text = e.target.value;
    const wordCount = text.split(/\s+/).filter(word => word).length;

    if (wordCount <= 150) {
      setDescription(text);
      setError('');
    } else {
      setError('Description cannot exceed 150 words.');
    }
  };

  return (
    <Box>
      <TextField
        value={description}
        onChange={handleChange}
        placeholder="Enter your description (up to 150 words)"
        multiline
        rows={10}
        fullWidth
        variant="outlined"
        error={!!error}
        helperText={error}
      />
    
      <br/>
      <Button type='submit' className='pramary'>submit</Button>
    </Box>
  );
};

export default DescriptionBox;

