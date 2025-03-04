import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  Button,
  TextField,
  CircularProgress,
} from "@mui/material";

interface SustainBotModalProps {
  open: boolean;
  onClose: () => void;
}

const SustainBotModal: React.FC<SustainBotModalProps> = ({ open, onClose }) => {
  const [inputText, setInputText] = useState<string>("");
  const [responseText, setResponseText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleSend = async () => {
    setLoading(true);
    setResponseText("");
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      let simulatedResponse = `SustainBot: Responding to "${inputText}"...`;
      if (inputText.toLowerCase().includes("sustainability")) {
        simulatedResponse += " Sustainability is key to a healthy planet!";
      } else {
        simulatedResponse += " Processing your request.";
      }
      setResponseText(simulatedResponse);
    } catch (error) {
      console.error("Error fetching response:", error);
      setResponseText("SustainBot: An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const style = {
    position: "absolute",
    top: "0%",
    left: "0%",
    // transform: 'translate(-50%, -50%)',
    width: "96vw",
    bgcolor: "background.paper",
    // border: '2px solid #000',
    // boxShadow: 24,
    px: "2vw",
    height: "100vh",
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="sustain-bot-modal-title"
      aria-describedby="sustain-bot-modal-description"
    >
      <Box sx={style}>
        <Typography id="sustain-bot-modal-title" variant="h6" component="h2">
          SustainBot
        </Typography>
        <Box sx={{ mt: 2 }}>
          {loading && <CircularProgress />}
          {responseText && (
            <Typography id="sustain-bot-modal-description" sx={{ mt: 2 }}>
              {responseText}
            </Typography>
          )}
        </Box>
        <Box
          sx={{
            width: "96%",
            position: "absolute",
            bottom: "10px",
          }}
        >
          <Box sx={{ mt: 2 }}>
            <TextField
              label="Ask SustainBot..."
              multiline
              rows={1}
              fullWidth
              value={inputText}
              onChange={handleInputChange}
              disabled={loading}
            />
          </Box>
          <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
            <Button variant="contained" onClick={handleSend} disabled={loading}>
              Send
            </Button>
            <Button variant="outlined" onClick={onClose} disabled={loading}>
              Close
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default SustainBotModal;
