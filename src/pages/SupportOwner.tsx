import { Box, Button, Card, Stack } from "@mui/material";
import KPIBox from "../components/commonComponents/KPIBox";
import { LineChart } from "@mui/x-charts/LineChart";
import {
  axisClasses,
  AxisConfig,
  BarChart,
  ChartsXAxisProps,
  DefaultChartsLegend,
  legendClasses,
  markElementClasses,
  PieChart,
  PieChartSlotProps,
  useDrawingArea,
} from "@mui/x-charts";
import SimpleTable from "../components/SLATable";
import EGTable from "../components/EGTable";
import { LegendPerItem } from "@mui/x-charts/ChartsLegend/LegendPerItem";
import { useEffect, useRef, useState } from "react";
import SustainBotModal from "./SustainBot";

const CustomLegend = (props) => {
  const { width, height, left, top, right } = useDrawingArea();
  const { series } = props;
  return (
    <foreignObject x={left} y={top + height} width={"100%"} height="60px">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(1, 1fr)",
          gap: "1px",
        }}
      >
        {series.pie.series.pie.data.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "5px",
              fontSize: "12px",
            }}
          >
            <div
              className="customLegend"
              style={{
                width: "10px",
                height: "10px",
                backgroundColor: item.color,
                marginRight: "5px",
                borderRadius: "10px",
              }}
            />
            <div
              style={{
                display: "flex",
                width: "calc(100% - 20px)",
                justifyContent: "space-between",
              }}
            >
              <div>{item.label}</div>
              <div style={{ fontWeight: "700" }}>{item.value}</div>{" "}
            </div>
          </div>
        ))}
      </div>
    </foreignObject>
  );
};

export default function SupportOwner() {
  const ref = useRef<HTMLDivElement>(null);
  const [parentElDim, setParentElDim] = useState(
    Math.min(ref.current?.offsetHeight || 0, ref.current?.offsetWidth || 0)
  );
  useEffect(() => {
    // console.log("rerender",parentElDim,ref.current?.offsetHeight,ref.current?.offsetWidth)
    setParentElDim(
      Math.min(ref.current?.offsetHeight || 0, ref.current?.offsetWidth || 0)
    );
  }, [ref.current?.offsetHeight, ref.current?.offsetWidth]);
  const KPIs = [
    { data: 220, description: "Volume Of Tickets" },
    { data: 120, description: "Total Incidents" },
    { data: "100", description: "Total Service Requests" },
    { data: "02:25", subscript: "Hr:min", description: "Mean Time to Resolve" },
    { description: "No Of Tickets Escalated", data: 3 },
    { data: "78%", description: "Avg. Customer Satisfaction" },
  ];

  const data = [
    { value: 5, label: "Open" },
    { value: 10, label: "In Progress" },
    { value: 15, label: "Resolved" },
  ];
    const [openBot,setOpenBot]=useState(false);
  function PieCenterLabel({ data }: { data: string | number }) {
    const { width, height, left, top, right } = useDrawingArea();
    // <StyledText x={left + width / 2} y={top + height / 2}>
    // console.log(parentElDim,left,width)
    return (
      <>
        <text
          x={left + parentElDim / 2}
          y={height / 2}
          fontSize={18}
          dominantBaseline={"central"}
          textAnchor="middle"
        >
          {data}
        </text>
        <text
          x={left + parentElDim / 2}
          y={20 + height / 2}
          fontSize={14}
          dominantBaseline={"central"}
          textAnchor="middle"
        >
          {"Total"}
        </text>
      </>
    );
  }
  function PieChartWithCenterLabel() {
    return (
      <PieChart
        height={parentElDim}
        width={parentElDim}
        sx={{
          overflow: "visible",
          [`& .${legendClasses.mark}`]: {
            ry: 10,
            height: "10px",
            width: "10px",
            y: "-5",
          },
          [`& .${legendClasses.itemBackground}`]: {
            height: "18px",
          },
          // [`& .${legendClasses.root}`]: {
          //   // translate:"0px "+Math.floor(cxh)+"px",
          //   translate:"10px 0px"
          // },
        }}
        series={[
          {
            data: data,
            id: "pie",
            // valueFormatter: (v, { dataIndex }) => {
            //   // const { rank } = data[dataIndex];
            //   // return `has ${v.value} points and is ranked ${rank}.`;
            //   return ""
            // },
            innerRadius: parentElDim / 3 - 20,
            outerRadius: parentElDim / 3,
            cx: parentElDim / 2,
          },
        ]}
        margin={{ top: 0, bottom: 60 }}
        slots={{ legend: CustomLegend }}
        slotProps={{
          legend: {
            // hidden:true,
            position: { vertical: "bottom", horizontal: "middle" },
            direction: "row",
            padding: 0,
            // itemGap: 0,
            labelStyle: {
              fontSize: "12px",
            },
          },
        }}
      >
        <PieCenterLabel data={20} />
      </PieChart>
    );
  }
  return (
    <div className="content">
      <div id="content-title" style={{ height: "5%",justifyContent:"space-between" }}>
        Pepsi Sustain Summary Dashboard
        <Button
            variant="outlined"
            size="small"
            sx={{ py: "2px", px: "3px", m: 0 }}
            onClick={()=>setOpenBot(true)}
          >
            <div>✨ Sustain AI Bot</div>
          </Button>
      </div>
      <Stack direction={"row"} gap={"10px"} height={"15%"}>
        {KPIs.map((i) => KPIBox(i))}
      </Stack>
      <Stack direction={"row"} gap={"10px"} height={"40%"}>
        <Card sx={{ width: "50%" }}>
          <Box
            sx={{
              width: "100%",
              fontWeight: 600,
              fontSize: "14px",
              px: "16px",
              py: "10px",
              color: "#010F1E",
              opacity: 1,
              height: "20px",
            }}
          >
            {" "}
            Ticket Trend
          </Box>
          <Box
            sx={{
              height: "calc(100% - 40px)",
              pl: "20px",
              "& div:first-child": {
                width: "calc(100% - 20px)",
                overflow: "visible",
              },
            }}
          >
            <LineChart
              sx={{
                overflow: "visible",
                "& .MuiChartsGrid-line": {
                  strokeDasharray: "4 4", // This makes the grid lines dotted
                },
                [`& .${legendClasses.mark}`]: {
                  ry: 10,
                  height: "10px",
                  width: "10px",
                  y: "-5",
                },
                [`& .${axisClasses.left} .${axisClasses.label}`]: {
                  transform: "translateX(-20px)",
                },
                [`& .${markElementClasses.root}`]: {
                  scale: 0.8,
                },
              }}
              xAxis={[
                {
                  data: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                  ],
                  // data:[1,2,3,4,5,6,7,8,9,10,11,12],
                  // valueFormatter:(i)=>{return months[i-1]},
                  disableLine: true,
                  disableTicks: true,
                  scaleType: "point",
                },
              ]}
              yAxis={[
                {
                  disableLine: true,
                  disableTicks: true,
                  label: "Tickets",
                  min: 0,
                },
              ]}
              grid={{ horizontal: true }}
              axisHighlight={{ x: "none", y: "none" }}
              tooltip={{ trigger: "item" }}
              series={[
                {
                  label: "IBP",
                  color: "#0D5EB8",
                  data: [
                    4952, 2340, 2009, 3363, 4141, 4305, 2343, 3557, 4945, 4510,
                    2241, 2552,
                  ],
                  // valueFormatter: (value) =>
                  //   value == null ? "NaN" : value.toString(),
                },
                {
                  label: "FP&A",
                  color: "#FED315",
                  data: [
                    2837, 4748, 4407, 4994, 3252, 2529, 4084, 2748, 2764, 4865,
                    2566, 3058,
                  ],
                },
                {
                  label: "DF Core",
                  color: "#E66C37",
                  data: [
                    4451, 2331, 2585, 3638, 3004, 3909, 4800, 3201, 2137, 3395,
                    2204, 4396,
                  ],
                  // valueFormatter: (value) =>
                  //   value == null ? "?" : value.toString(),
                },
              ]}
              // height={200}
              margin={{ top: 10, bottom: 60 }}
              slotProps={{
                legend: {
                  position: { vertical: "bottom", horizontal: "middle" },
                },
              }}
            />
          </Box>
        </Card>
        <Card sx={{ width: "calc(0.3 * (100% - 20px))" }}>
          <Box
            sx={{
              width: "100%",
              fontWeight: 600,
              fontSize: "14px",
              px: "16px",
              py: "10px",
              color: "#010F1E",
              opacity: 1,
            }}
          >
            {" "}
            Top 5 Project’s by SLA Complaince
          </Box>
          <Box
            sx={{
              height: "calc(100% - 40px)",
              overflow: "hidden",
              // pb:"10%",
              "& div:first-child": {
                height: "calc(100% + 50px)",
                mt: "-25px",
                width: "calc(100% + 50px)",
                ml: "-20px",
              },
            }}
          >
            <BarChart
              borderRadius={10}
              yAxis={[{ tickMaxStep: 10 }]}
              xAxis={[
                {
                  id: "bar",
                  scaleType: "band",
                  data: [
                    "Project A",
                    "Project B",
                    "Project C",
                    "Project D",
                    "Project E",
                  ],
                  categoryGapRatio: 0.7,
                  tickLabelInterval: (i, j) => true,
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
              // width={500}
              // height={300}
            />
          </Box>
        </Card>
        <Card sx={{ width: "calc(0.2 * (100% - 20px))" }}>
          <Box
            sx={{
              width: "100%",
              fontWeight: 600,
              fontSize: "14px",
              px: "16px",
              py: "10px",
              color: "#010F1E",
              opacity: 1,
            }}
          >
            {" "}
            Ticket Trend
          </Box>
          <Box
            ref={ref}
            sx={{
              height: "calc(100% - 40px)",
              display: "flex",
              "& div:first-child": { overflow: "visible" },
            }}
          >
            <PieChartWithCenterLabel />
          </Box>
        </Card>
      </Stack>
      <Stack direction={"row"} gap={"10px"} height={"40%"}>
        <Card sx={{ width: "50%" }}>
          <Box
            sx={{
              width: "100%",
              fontWeight: 600,
              fontSize: "14px",
              px: "16px",
              py: "10px",
              color: "#010F1E",
              opacity: 1,
              height: "20px",
            }}
          >
            {" "}
            SLA Compliance
          </Box>
          <Box sx={{ maxHeight: "230px", height: "calc(100% - 40px)" }}>
            <SimpleTable />
          </Box>
        </Card>
        <Card sx={{ width: "50%" }}>
          <Box
            sx={{
              width: "100%",
              fontWeight: 600,
              fontSize: "14px",
              px: "16px",
              py: "10px",
              color: "#010F1E",
              opacity: 1,
              height: "20px",
            }}
          >
            {" "}
            Efficiency Gains
          </Box>
          <Box sx={{ maxHeight: "230px", height: "calc(100% - 40px)" }}>
            <EGTable highlight="Q4" />
          </Box>
        </Card>
      </Stack>
      <SustainBotModal open={openBot} onClose={()=>setOpenBot(false)}/>
    </div>
  );
}
