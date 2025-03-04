import React, { useState } from 'react';
import {
  Box,
  Typography,
  Select,
  MenuItem,
  TextField,
  IconButton,
  Collapse,
  FormControl,
  InputLabel
} from '@mui/material';

const TrendAnalysis = () => {
  const [subjectArea, setSubjectArea] = useState('');
  const [timeFrame, setTimeFrame] = useState('');
  const [hashtagValue, setHashtagValue] = useState('');


  return (

        <Box mt={2}>
          <FormControl fullWidth margin="normal">
            <InputLabel>Select Subject_Area</InputLabel>
            <Select
                label="Select Subject_Area"
              value={subjectArea}
              onChange={(e) => setSubjectArea(e.target.value)}
            >
              <MenuItem value="Advertising">Advertising</MenuItem>
              {/* Add more options as needed */}
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel>Choose the time frame</InputLabel>
            <Select
            label="Choose the time frame"
              value={timeFrame}
              onChange={(e) => setTimeFrame(e.target.value)}
            >
              <MenuItem value="Last # days">Last # days</MenuItem>
              {/* Add more options as needed */}
            </Select>
          </FormControl>
          <TextField
            fullWidth
            margin="normal"
            label="Please insert the # value."
            value={hashtagValue}
            onChange={(e) => setHashtagValue(e.target.value)}
          />
        </Box>

  );
};

export default TrendAnalysis;