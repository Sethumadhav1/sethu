import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Container, TextField, Select, MenuItem, Button, FormControl, InputLabel, Card } from '@mui/material';

export const TicketCreation: React.FC = () => {
  const [ticketType, setTicketType] = useState<string>('');
  const [callerId, setCallerId] = useState<string>('');
  const [requestedUser, setRequestedUser] = useState<string>('');
  const [requestedItem, setRequestedItem] = useState<string>('');
  const [shortDescription, setShortDescription] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [priority, setPriority] = useState<string>('');
  const [dueDate, setDueDate] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [subCategory, setSubCategory] = useState<string>('');
  const [impact, setImpact] = useState<string>('');
  const [urgency, setUrgency] = useState<string>('');
  const [configurationItem, setConfigurationItem] = useState<string>('');
  const [assignmentGroup, setAssignmentGroup] = useState<string>('');
  const [assignedTo, setAssignedTo] = useState<string>('');
  const [state, setState] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log({
      ticketType,
      callerId,
      requestedUser,
      requestedItem,
      shortDescription,
      description,
      priority,
      dueDate,
      category,
      subCategory,
      impact,
      urgency,
      configurationItem,
      assignmentGroup,
      assignedTo,
      state,
    });
  };

  return (
    <div style={{maxHeight:"95%",overflowY:"auto"}}>
      <Typography variant="h6">
        Support Ticket Creation
      </Typography>

      <Card sx={{ marginTop: '16px', "& .MuiSelect-select": { py: "12px" }, px: "10px", py: "5px", "& .MuiInputLabel-root": { lineHeight: "1rem" } }}>
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth margin="normal">
            <InputLabel>Ticket Type</InputLabel>
            <Select
              label="Ticket Type"
              value={ticketType}
              onChange={(e) => setTicketType(e.target.value as string)}
            >
              <MenuItem value="incident">Incident</MenuItem>
              <MenuItem value="request">Request</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="Caller ID"
            fullWidth
            margin="normal"
            value={callerId}
            onChange={(e) => setCallerId(e.target.value)}
          />

          {ticketType === 'request' && (
            <>
              <TextField
                label="Requested User"
                fullWidth
                margin="normal"
                value={requestedUser}
                onChange={(e) => setRequestedUser(e.target.value)}
              />
              <TextField
                label="Requested Item"
                fullWidth
                margin="normal"
                value={requestedItem}
                onChange={(e) => setRequestedItem(e.target.value)}
              />
              <TextField
                label="Due Date"
                type="date"
                fullWidth
                margin="normal"
                InputLabelProps={{ shrink: true }}
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
            </>
          )}

          <TextField
            label="Short Description"
            fullWidth
            margin="normal"
            value={shortDescription}
            onChange={(e) => setShortDescription(e.target.value)}
          />

          <TextField
            label="Description"
            multiline
            rows={4}
            fullWidth
            margin="normal"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          {ticketType === 'incident' && (
            <>
              <FormControl fullWidth margin="normal">
                <InputLabel>Category</InputLabel>
                <Select
                  label="Category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value as string)}
                >
                  <MenuItem value="network">Network</MenuItem>
                  <MenuItem value="software">Software</MenuItem>
                  <MenuItem value="hardware">Hardware</MenuItem>
                </Select>
              </FormControl>

              <TextField
                label="Sub-category"
                fullWidth
                margin="normal"
                value={subCategory}
                onChange={(e) => setSubCategory(e.target.value)}
              />

              <FormControl fullWidth margin="normal">
                <InputLabel>Impact</InputLabel>
                <Select
                  label="Impact"
                  value={impact}
                  onChange={(e) => setImpact(e.target.value as string)}
                >
                  <MenuItem value="low">Low</MenuItem>
                  <MenuItem value="medium">Medium</MenuItem>
                  <MenuItem value="high">High</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth margin="normal">
                <InputLabel>Urgency</InputLabel>
                <Select
                  label="Urgency"
                  value={urgency}
                  onChange={(e) => setUrgency(e.target.value as string)}
                >
                  <MenuItem value="low">Low</MenuItem>
                  <MenuItem value="medium">Medium</MenuItem>
                  <MenuItem value="high">High</MenuItem>
                </Select>
              </FormControl>

              <TextField
                label="Configuration Item"
                fullWidth
                margin="normal"
                value={configurationItem}
                onChange={(e) => setConfigurationItem(e.target.value)}
              />
            </>
          )}

          <FormControl fullWidth margin="normal">
            <InputLabel>Assignment Group</InputLabel>
            <Select
              label="Assignment Group"
              value={assignmentGroup}
              onChange={(e) => setAssignmentGroup(e.target.value as string)}
            >
              <MenuItem value="none">None</MenuItem>
              <MenuItem value="support">Support</MenuItem>
              <MenuItem value="development">Development</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="Assigned to"
            fullWidth
            margin="normal"
            value={assignedTo}
            onChange={(e) => setAssignedTo(e.target.value)}
          />

          <FormControl fullWidth margin="normal">
            <InputLabel>State</InputLabel>
            <Select
              label="State"
              value={state}
              onChange={(e) => setState(e.target.value as string)}
            >
              <MenuItem value="new">New</MenuItem>
              <MenuItem value="in progress">In Progress</MenuItem>
              <MenuItem value="resolved">Resolved</MenuItem>
              <MenuItem value="closed">Closed</MenuItem>
            </Select>
          </FormControl>

          <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '16px' }}>
            Create Ticket
          </Button>
        </form>
      </Card>
    </div>
  );
}
