import React from 'react';
import { Box, Button, Select, MenuItem, InputLabel, FormControl, Typography, Stack } from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';
import BarGraphMock from '../../components/mockCharts/MockBar';

const DelayedJobs = () => {
  return (
    <Stack direction={"column"} gap="10px" mt="20px">
      <Box>
        <FormControl fullWidth>
          <InputLabel>Choose the time frame</InputLabel>
          <Select
            label="Choose the time frame"
            defaultValue={0}
            IconComponent={ArrowDropDown}
          >
            <MenuItem value={0}>Since Beginning</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box>

              <BarGraphMock/>
            
      </Box>
      <Box>
        <Button variant="contained">
          <Typography>Insights</Typography>
        </Button>
      </Box>
    </Stack>
  );
};
export default DelayedJobs;
