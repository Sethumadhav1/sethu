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

const mockData = [
  { id: "5 days", ticketsOpen: 10 },
  { id: ">5 days to 10 days", ticketsOpen: 15 },
  { id: ">10 days to < 30 days", ticketsOpen: 12 },
  { id: ">30 days", ticketsOpen: 2 },
];

const AgeingTable = ({highlight=""}:{highlight?:string}) => {
  return (
    <TableContainer
      //  component={Paper}
      sx={{
        padding: "2px",
        maxHeight: "calc(100% - 4px)",
        maxWidth: "calc(100% - 4px)",
      }}
    >
      <Table stickyHeader sx={{"& .highlighted":{background:"#AEE0CA"}}}>
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
            <TableCell>ID</TableCell>
            <TableCell>Tickets Open</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mockData.map((row,index) => (
            <TableRow key={row.id} sx={{ "& td": { padding: "4px 8px" } }}>
              <TableCell className={highlight===row.id?"highlighted":""}>{row.id}</TableCell>
              <TableCell className={highlight===row.id?"highlighted":""}>{row.ticketsOpen}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AgeingTable;
