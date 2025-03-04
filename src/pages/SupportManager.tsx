import { Box, Button, Card, Stack } from "@mui/material";
import KPIBox from "../components/commonComponents/KPIBox";
import { LineChart } from "@mui/x-charts/LineChart";
import {
  axisClasses,
  AxisConfig,
  BarChart,
  ChartsXAxisProps,
  legendClasses,
  markElementClasses,
  PieChart,
  useDrawingArea,
} from "@mui/x-charts";
import SimpleTable from "../components/SLATable";
import EGTable from "../components/EGTable";
import { useEffect, useRef, useState } from "react";
import { KPIDoublet } from "../components/commonComponents/KPIGroup";
import AgeingTable from "../components/AgeingTable";
import ComboBox from "../components/commonComponents/ComboBox";
import SustainBotModal from "./SustainBot";

export default function SupportManager() {
  const KPIs = [
    { data: 220, description: "Volume Of Tickets" },
    { data: 120, description: "Total Incidents" },
    { data: "100", description: "Total Service Requests" },
    { data: "02:25", subscript: "Hr:min", description: "Mean Time to Resolve" },
    { description: "No Of Tickets Escalated", data: 3 },
    { data: "78%", description: "Avg. Customer Satisfaction" },
  ];

  const todayKPIs = [
    { description: "Tickets Opened", data: 20 },
    { description: "Tickets Closed", data: 18 },
  ];
  const weeklyKPIs = [
    { description: "Tickets Opened", data: 120 },
    { description: "Tickets Closed", data: 118 },
  ];
  const Indexes = [
    { description: "Overall CPI %", data: "80%" },
    { description: "Overall KPI %", data: "72%" },
    { description: "Overall CSAT %", data: "82%" },
  ];
  const ref = useRef<HTMLDivElement>(null);
  const [parentElDim, setParentElDim] = useState(
    Math.min(ref.current?.offsetHeight || 0, ref.current?.offsetWidth || 0)
  );
  const [openBot,setOpenBot]=useState(false);
  useEffect(() => {
    // console.log("rerender",parentElDim,ref.current?.offsetHeight,ref.current?.offsetWidth)
    setParentElDim(
      Math.min(ref.current?.offsetHeight || 0, ref.current?.offsetWidth || 0)
    );
  }, [ref.current?.offsetHeight, ref.current?.offsetWidth]);

  const CustomLegend = (props) => {
    const { width, height, left, top, right } = useDrawingArea();
    const { series } = props;
    console.log(ref.current?.offsetWidth, width, left, right);
    return (
      <foreignObject
        x={20 - ((ref.current?.offsetWidth || 0) - width - left - right) / 2}
        y={top + height}
        width={ref.current?.offsetWidth || 0}
        height="60px"
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "4px",
            columnWidth: "calc(50% - 10px)",
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
                  width: "60%",
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
  const data = [
    { value: 5, label: "Open" },
    { value: 10, label: "In Progress" },
    { value: 15, label: "Resolved" },
    { value: 10, label: "Pending" },
  ];

  function PieChartWithCenterLabel() {
    return (
      <PieChart
        height={parentElDim}
        width={parentElDim}
        sx={{
          [`& .${legendClasses.mark}`]: {
            ry: 10,
            height: "10px",
            width: "10px",
            y: "-5",
          },
          [`& .${legendClasses.itemBackground}`]: {
            height: "18px",
          },
        }}
        series={[
          {
            id: "pie",
            data,
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

  const options = [
    { label: "IBP", value: "IBP" },
    { label: "FP&A", value: "FP&A" },
    { label: "DF CORE", value: "DF CORE" },
  ];
  const [val, setVal] = useState(options[0]);

  const years = [
    { label: "This Year", value: "This Year" },
    { label: "Previous Year", value: "Previous Year" },
  ];
  const [year, setYear] = useState(years[0]);

  return (
    <div className="content">
      <div
        id="content-title"
        style={{
          flexGrow: 1,
          flexBasis: "20px",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <div>Sustain Operation Dashboard</div>
        <ComboBox
          width="100px"
          type="text"
          placeholder=""
          label=""
          value={val}
          onChange={(e) => {
            setVal(e);
          }}
          options={options}
        />
        <Stack
          direction={"row"}
          alignItems={"center"}
          marginLeft={"auto"}
          gap="10px"
        >
          <Button
            variant="outlined"
            size="small"
            sx={{ py: "2px", px: "3px", m: 0 }}
            onClick={()=>setOpenBot(true)}
          >
            <div>✨ Sustain AI Bot</div>
          </Button>
          <Button variant="contained" sx={{ py: "2px", fontSize: "12px" }}>
            + Create
          </Button>
          <ComboBox
            width="150px"
            type="text"
            placeholder=""
            label=""
            value={year}
            onChange={(e) => {
              setYear(e);
            }}
            options={years}
          />
        </Stack>
      </div>
      <Stack direction={"row"} gap={"10px"} flexGrow={3} flexBasis={"80px"}>
        <KPIDoublet doubleData={todayKPIs} title="Today" />
        <KPIDoublet doubleData={weeklyKPIs} title="Weekly" />
        <KPIDoublet doubleData={Indexes} title="INDEX’S" />
      </Stack>
      <Stack direction={"row"} gap={"10px"} flexGrow={3} flexBasis={"250px"}>
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
                  label: "",
                  color: "#0D5EB8",
                  data: [
                    4952, 2340, 2009, 3363, 4141, 4305, 2343, 3557, 4945, 4510,
                    2241, 2552,
                  ],
                },
              ]}
              // height={200}
              margin={{ top: 10, bottom: 30 }}
              slotProps={{
                legend: {
                  hidden: true,
                },
              }}
            />
          </Box>
        </Card>
        <Card sx={{ width: "calc(0.25 * (100% - 20px))" }}>
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
            Overall Ticket Status
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
        <Card sx={{ width: "calc(0.25 * (100% - 20px))" }}>
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
            Ageing
          </Box>
          <Box sx={{ height: "calc(100% - 40px)" }}>
            <AgeingTable highlight=">30 days" />
          </Box>
        </Card>
      </Stack>
      <Stack direction={"row"} gap={"10px"} flexGrow={3} flexBasis={"250px"}>
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
                  label: "",
                  color: "#E66C37",
                  data: [
                    4451, 2331, 2585, 3638, 3004, 3909, 4800, 3201, 2137, 3395,
                    2204, 4396,
                  ],
                },
              ]}
              // height={200}
              margin={{ top: 10, bottom: 30 }}
              slotProps={{
                legend: {
                  hidden: true,
                },
              }}
            />
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
            <EGTable highlight="Q1" />
          </Box>
        </Card>
      </Stack>
      <SustainBotModal open={openBot} onClose={()=>setOpenBot(false)}/>
    </div>
  );
}
