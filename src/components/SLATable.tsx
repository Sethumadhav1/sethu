import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const data = [
  {
    Projects: "Project A",
    "Critical Performance Index": 75,
    "Key Performance Index": 80,
  },
  {
    Projects: "Project B",
    "Critical Performance Index": 85,
    "Key Performance Index": 90,
  },
  {
    Projects: "Project C",
    "Critical Performance Index": 65,
    "Key Performance Index": 70,
  },
  {
    Projects: "Project D",
    "Critical Performance Index": 95,
    "Key Performance Index": 85,
  },
  {
    Projects: "Project E",
    "Critical Performance Index": 55,
    "Key Performance Index": 60,
  },
  //   { Projects: 'Project F', 'Critical Performance Index': 78, 'Key Performance Index': 82 },
];
const SimpleProgressBar = (p: number) => {
  // const back =
  //   Number(p.toString().split("%")[0]) > 50
  //     ? "rgba(51, 135, 223, 1)"
  //     : " rgba(219, 51, 51, 1)";
  const back = p > 85 ? "rgba(51, 135, 223, 1)" : " rgba(219, 51, 51, 1)";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "4px",
      }}
    >
      <div
        style={{
          width: "100%",
          minWidth: "80px",
          height: "12px",
          backgroundColor: "rgba(57, 62, 69, 1)",
          borderRadius: "2px",
        }}
      >
        <div
          id="myBar"
          style={{
            width: p + "%",
            height: "100%",
            backgroundColor: back,
              borderRadius: "2px",
          }}
        ></div>
      </div>
      {p + "%"}
    </div>
  );
};
function SimpleTable() {
  return (
    <TableContainer
    //   component={Paper}
      sx={{
        padding: "2px",
        maxHeight: "calc(100% - 4px)",
        maxWidth: "calc(100% - 4px)",
      }}
    >
      <Table stickyHeader>
        <TableHead>
          <TableRow
            sx={{
              "& th": {
                padding: "4px 8px",
                backgroundColor: "rgba(249, 250, 251, 1)",
                border: "1px solid rgba(238, 237, 240, 1)",
              },
            }}
          >
            <TableCell>Projects</TableCell>
            <TableCell>Critical Performance Index</TableCell>
            <TableCell>Key Performance Index</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={row.Projects} sx={{ "& td": { padding: "4px 8px" } }}>
              <TableCell>{row.Projects}</TableCell>
              <TableCell>
                {SimpleProgressBar(row["Critical Performance Index"])}
              </TableCell>
              <TableCell>
                {SimpleProgressBar(row["Key Performance Index"])}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default SimpleTable;
