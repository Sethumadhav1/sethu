import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box,
  Modal,
  Grid2,
  Grid,
  Tab,
  Tabs,
} from "@mui/material";
import NumInput from "../components/commonComponents/NumericalInput";
import { CloseOutlined } from "@mui/icons-material";
import { getTickets } from "../api/tickets";
import SustainBotModal from "./SustainBot";






// const tickets = [
//   {
//     id: "INC1388672",
//     type: "incident",
//     priority: "P4",
//     status: "Resolved",
//     createdDate: "2025-01-31 16:44",
//     category: "Network",
//   },
//   {
//     id: "INC6977684",
//     type: "incident",
//     priority: "P4",
//     status: "Resolved",
//     createdDate: "2025-01-31 13:46",
//     category: "Network",
//   },
//   {
//     id: "INC5060711",
//     type: "incident",
//     priority: "P4",
//     status: "Resolved",
//     createdDate: "2025-01-30 19:58",
//     category: "Network",
//   },
// ];

// const mockDetails = {
//   id: "INC1388672",
//   status: "RESOLVED",
//   type: "incident",
//   assignmentGroup: "L1",
//   priority: "P4",
//   category: "Network",
//   project: "Core Infrastructure",
//   created: "2025-01-31T16:44:53.480502",
//   resolved: "2025-02-10T04:14:42.007765",
//   slaTargetHours: 4,
//   aiAgentsUsed: "yes",
//   description: `Pipeline Failed: Source file 'data_ingestion_v1.xlsx' not found in directory 'data_ingestion/' at scheduled runtime.
//   Pipeline Name: sample_pipeline Pipeline ID: d549ae6e-d65f-4047-a173-1bf2c74f1b89 Layer: silver Dataset Name: data_ingestion_v1.xlsx Job ID: 6719 Timestamp: 2025-01-07T16:14:13.3382754Z`,
//   resolution: `The pipeline has been successfully triggered. Here are the details:
//   Pipeline Name: sample_pipeline
//   Run ID: bdcb872d-dff3-11ef-80a5-7c1e52463062
//   Run URL: View Run Details`,
// };

export default function LOne() {



    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [tabValue, setTabValue] = useState(0);
    
    useEffect(() => {
      const fetchTickets = async () => {
        try {
          const data = await getTickets({ level: 'L1', ai_agents_used: tabValue?["no"]:["yes"] });
          console.log(tickets)
          if(data){setTickets(data)}else{setTickets([])};
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
      
      fetchTickets();
    }, [tabValue]);

  const [open, setOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const mockDetails=selectedTicket;
    // console.log(tickets)
  const handleOpen = (ticket) => {
    setSelectedTicket(ticket);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedTicket(null);
  };


  const handleTabClick = (tabIndex: number) => {
    console.log(`Tab ${tabIndex} clicked`);
    setTabValue(tabIndex);
  };

  const [openBot,setOpenBot]=useState(false);

  const rowStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "8px",
    paddingRight:"10%",
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems:"center"
        }}
      >
        <Typography variant="h6">L1 Support</Typography>
        <Tabs
          value={tabValue}
          aria-label="simple tabs example"
          variant="scrollable"
          scrollButtons="auto"
          textColor="inherit"
          indicatorColor="secondary"
        >
          <Tab label="Automatic" onClick={() => handleTabClick(0)} />
          <Tab label="Manual" onClick={() => handleTabClick(1)} />
        </Tabs>
        <div style={{display:"flex",gap:"10px"}}>
        <Button
            variant="outlined"
            size="small"
            sx={{ py: "2px", px: "3px", m: 0,maxHeight:"30px" }}
            onClick={()=>setOpenBot(true)}
          >
            <div>✨ Sustain AI Bot</div>
          </Button>
          <NumInput />
        </div>
        
      </div>

      <Container style={{ marginTop: "16px", maxHeight: "80%" }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Priority</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Created Date</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tickets.map((ticket) => (
                <TableRow key={ticket.id}>
                  <TableCell>{ticket.id}</TableCell>
                  <TableCell>{ticket.type}</TableCell>
                  <TableCell>{ticket.priority}</TableCell>
                  <TableCell>{ticket.status}</TableCell>
                  <TableCell>{ticket.createdDate}</TableCell>
                  <TableCell>{ticket.category}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleOpen(ticket)}
                    >
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80vw",
            maxHeight: "80vh",
            bgcolor: "background.paper",
            border: "none",
            boxShadow: 24,
            p: 4,
            overflow: "auto",
          }}
        >
          <Typography variant="h6" component="h2">
            Ticket Details
            <CloseOutlined
              onClick={handleClose}
              sx={{ float: "right", cursor: "pointer" }}
            />
          </Typography>
          <Typography sx={{ mt: 2 }}>
            <strong>Status:</strong> {mockDetails?.status}
          </Typography>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={6}>
              <Typography variant="subtitle1">
                <strong>Basic Information</strong>
              </Typography>
              <div style={rowStyle}>
                <Typography>ID:</Typography>
                <Typography>{mockDetails?.id}</Typography>
              </div>
              <div style={rowStyle}>
                <Typography>Type:</Typography>
                <Typography>{mockDetails?.type}</Typography>
              </div>
              <div style={rowStyle}>
                <Typography>Assignment Group:</Typography>
                <Typography>{mockDetails?.assignmentGroup}</Typography>
              </div>
              <div style={rowStyle}>
                <Typography>Priority:</Typography>
                <Typography>{mockDetails?.priority}</Typography>
              </div>
              <div style={rowStyle}>
                <Typography>Category:</Typography>
                <Typography>{mockDetails?.category}</Typography>
              </div>
              <div style={rowStyle}>
                <Typography>Project:</Typography>
                <Typography>{mockDetails?.project}</Typography>
              </div>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1">
                <strong>Timing & Resolution</strong>
              </Typography>
              <div style={rowStyle}>
                <Typography>Created:</Typography>
                <Typography>{mockDetails?.createdDate}</Typography>
              </div>
              <div style={rowStyle}>
                <Typography>Resolved:</Typography>
                <Typography>{mockDetails?.resolvedDate}</Typography>
              </div>
              <div style={rowStyle}>
                <Typography>SLA Target Hours:</Typography>
                <Typography>{mockDetails?.slaTargetHours}</Typography>
              </div>
              <div style={rowStyle}>
                <Typography>AI Agents Used:</Typography>
                <Typography>{mockDetails?.aiAgentsUsed}</Typography>
              </div>
            </Grid>
          </Grid>
          <Typography sx={{ mt: 2 }}>
            <strong>Description</strong>
          </Typography>
          <Typography>{mockDetails?.description}</Typography>
          <Typography sx={{ mt: 2 }}>
            <strong>Resolution</strong>
          </Typography>
          <Typography>{mockDetails?.resolution}</Typography>
        </Box>
      </Modal>
      <SustainBotModal open={openBot} onClose={()=>setOpenBot(false)}/>
    </div>
  );
}
