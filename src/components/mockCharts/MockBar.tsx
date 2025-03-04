import React from 'react';
import { Box } from '@mui/material';
import {   AxisConfig,
    BarChart,
    ChartsXAxisProps,} from '@mui/x-charts';


const BarGraphMock = () => {
  return (
    <Box height={"200px"} width={"500px"}>
            <BarChart
              borderRadius={10}
            //   yAxis={[{ tickMaxStep: 10 }]}
              xAxis={[
                {
                  id: "bar",
                  scaleType: "band",
                  data: [
                    "A",
                    "B",
                    "C",
                    "D",
                    "E",
                  ],
                //   categoryGapRatio: 0.7,
                //   tickLabelInterval: (i, j) => true,
                  sx: {
                    "&.MuiAxis-tickLabel": {
                      whiteSpace: "normal",
                      wordWrap: "break-word",
                      fontSize: "10px",
                    },
                  },
                  // barGapRatio: 0.1,
                } as AxisConfig<"band", unknown, ChartsXAxisProps>,
              ]}
              slotProps={{ legend: { hidden: true } }}
              series={[{ data: [40, 35, 52, 67, 78], color: "#009DE2" }]}
            />
            </Box>
  );
};

export default BarGraphMock;