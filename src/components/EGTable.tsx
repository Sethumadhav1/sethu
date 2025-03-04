import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

const data = [
  {
    Levers: "Lever A",
    "Planned Hours": 1000,
    "Actual Hours": { Q1: 250, Q2: 200, Q3: 300, Q4: 250 },
    "Benefits Realized %": 80,
  },
  {
    Levers: "Lever B",
    "Planned Hours": 1200,
    "Actual Hours": { Q1: 300, Q2: 300, Q3: 300, Q4: 300 },
    "Benefits Realized %": 85,
  },
  {
    Levers: "Lever C",
    "Planned Hours": 900,
    "Actual Hours": { Q1: 200, Q2: 250, Q3: 200, Q4: 250 },
    "Benefits Realized %": 75,
  },
  {
    Levers: "Lever D",
    "Planned Hours": 1100,
    "Actual Hours": { Q1: 275, Q2: 275, Q3: 275, Q4: 275 },
    "Benefits Realized %": 90,
  },
  //   { Levers: 'Lever E', 'Planned Hours': 950, 'Actual Hours': { Q1: 225, Q2: 225, Q3: 250, Q4: 250 }, 'Benefits Realized %': 78 },
  //   { Levers: 'Lever F', 'Planned Hours': 1050, 'Actual Hours': { Q1: 250, Q2: 250, Q3: 275, Q4: 275 }, 'Benefits Realized %': 82 },
];

function EGTable({highlight=""}:{highlight?:"Q1"|"Q2"|"Q3"|"Q4"|""}) {
  return (
    <TableContainer
    //   component={Paper}
      sx={{
        padding: "2px",
        maxHeight: "calc(100% - 4px)",
        maxWidth: "calc(100% - 4px)",
      }}
    >
      <Table>
        <TableHead>
          <TableRow
            sx={{
              "& th": {
                lineHeight: "0.9rem",
                padding: "4px 8px",
                backgroundColor: "rgba(249, 250, 251, 1)",
                border: "1px solid rgba(238, 237, 240, 1)",
                position: "sticky",
                top: 0,
                zIndex: 1,
              },
            }}
          >
            <TableCell rowSpan={2}>Levers</TableCell>
            <TableCell rowSpan={2}>
              Planned Hours
              <Typography variant="caption" display="block" color="grey">
                (Per Year)
              </Typography>
            </TableCell>
            <TableCell colSpan={4}>Actual Hours</TableCell>
            <TableCell rowSpan={2}>
              Benefits Realized %
              <Typography variant="caption" display="block" color="grey">
                (Sum of Efforts)
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow
            sx={{
              "& th": {
                lineHeight: "0.9rem",
                padding: "4px 8px",
                backgroundColor: "rgba(249, 250, 251, 1)",
                border: "1px solid rgba(238, 237, 240, 1)",
                position: "sticky",
                top: 17,
                zIndex: 1,
              },
              "& .highlighted":{background:"#AEE0CA"}
            }}
          >
            <TableCell className={highlight==="Q1"?"highlighted":""}>Q1</TableCell>
            <TableCell className={highlight==="Q2"?"highlighted":""}>Q2</TableCell>
            <TableCell className={highlight==="Q3"?"highlighted":""}>Q3</TableCell>
            <TableCell className={highlight==="Q4"?"highlighted":""}>Q4</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={row.Levers} sx={{ "& td": { padding: "4px 8px" },"& .highlighted":{background:"#AEE0CA"} }}>
              <TableCell>{row.Levers}</TableCell>
              <TableCell>{row["Planned Hours"]}</TableCell>
              <TableCell className={highlight==="Q1"?"highlighted":""}>{row["Actual Hours"].Q1}</TableCell>
              <TableCell className={highlight==="Q2"?"highlighted":""}>{row["Actual Hours"].Q2}</TableCell>
              <TableCell className={highlight==="Q3"?"highlighted":""}>{row["Actual Hours"].Q3}</TableCell>
              <TableCell className={highlight==="Q4"?"highlighted":""}>{row["Actual Hours"].Q4}</TableCell>
              <TableCell>{row["Benefits Realized %"]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default EGTable;
