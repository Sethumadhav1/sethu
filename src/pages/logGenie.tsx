import React from 'react';
import { AppBar, Tabs, Tab, Box, Typography } from '@mui/material';
import TrendAnalysis from '../containers/GenieContainers/TrendAnalysis';
import DelayedJobs from '../containers/GenieContainers/DelayedJobs';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

export default function LogGenie() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Trend Analysis"  />
          <Tab label="Delayed Jobs"  />
          <Tab label="Job wise counts"  />
          <Tab label="Top 10 frequently failing jobs" />
        </Tabs>
      <TabPanel value={value} index={0}>
        Trend Analysis Content
        <TrendAnalysis/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Delayed Jobs Content
        <DelayedJobs/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Job wise counts Content
      </TabPanel>
      <TabPanel value={value} index={3}>
        Top 10 frequently failing jobs Content
      </TabPanel>
    </div>
  );
}