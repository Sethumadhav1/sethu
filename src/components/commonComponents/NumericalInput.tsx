import React, { useState } from 'react';
import { TextField, Button, Box, IconButton, InputAdornment } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

export default function NumInput() {
    const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue(value + 1);
  };

  const handleDecrement = () => {
    if(value!=1){
    setValue(value - 1);
    }
  };

  return (
    <Box display="flex" alignItems="center">
      <TextField
        label="Refresh Interval"
        type="text"
        value={value}
        onChange={(e) => {
            if(Number(e.target.value)<0||Boolean(Number(e.target.value))===false)
            {console.log("wrong value")}
            else{
            setValue(Number(e.target.value))
            }

        }}
        InputProps={{
          inputProps: { min: 0, style: { textAlign: 'center', height: '20px' } },
          startAdornment: (
            <InputAdornment position="start">
              <IconButton onClick={handleDecrement} size="small" sx={{fontSize:"0.8rem"}}>
                <RemoveIcon sx={{fontSize:"0.8rem"}}/>
              </IconButton>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleIncrement} size="small" sx={{fontSize:"0.8rem"}} >
                <AddIcon sx={{fontSize:"0.8rem"}}/>
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{ '& .MuiInputBase-root': { height: '25px',width:"160px" },'& .MuiInputBase-input':{fontSize:"0.8rem"} }}
      />
    </Box>
  );
}

