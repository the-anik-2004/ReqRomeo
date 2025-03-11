import React from "react";
import { Box, Typography, Paper, Button } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const ErrorScreen = ({ errorResObj }) => {
  const errorImage = "/error.png"; // Error placeholder image

  if (!errorResObj) {
    return (
      <Box textAlign="center" mt={4}>
        <Typography variant="h6" color="error">
          No Error Data Available
        </Typography>
      </Box>
    );
  }

  const { code, message, name, stack, config, request } = errorResObj;

  const handleCopyError = () => {
    const errorDetails = `
      Error Name: ${name}
      Error Code: ${code}
      Message: ${message}
      Stack Trace: ${stack}
      Request URL: ${config?.url || "N/A"}
      Request Method: ${config?.method?.toUpperCase() || "N/A"}
    `;
    navigator.clipboard.writeText(errorDetails);
    alert("Error details copied to clipboard!");
  };

  return (
    <Box mt={4} p={2}>
      <Typography variant="h5" color="error" gutterBottom>
        Error Dashboard
      </Typography>

      <Paper elevation={3} sx={{ p: 2, backgroundColor: "#1e1e1e", color: "white", borderRadius: 2 }}>
        <img src={errorImage} alt="Error" className="w-full object-fit mb-4 rounded-md border border-zinc-700" />

        <Typography variant="h6" gutterBottom>
          Error Details:
        </Typography>

        <Typography variant="body1">
          <strong>Code:</strong> {code || "N/A"}
        </Typography>
        <Typography variant="body1">
          <strong>Message:</strong> {message || "N/A"}
        </Typography>
        <Typography variant="body1">
          <strong>Request URL:</strong> {config?.url || "N/A"}
        </Typography>
        <Typography variant="body1">
          <strong>Method:</strong> {config?.method?.toUpperCase() || "N/A"}
        </Typography>
        <Typography variant="body1">
          <strong>Stack Trace:</strong>
        </Typography>
        <Paper elevation={1} sx={{ p: 1, backgroundColor: "#282c34", color: "#ff6b6b", fontSize: "0.9rem", overflowX: "auto" }}>
          <pre>{stack || "N/A"}</pre>
        </Paper>

        <Button
          variant="contained"
          color="error"
          startIcon={<ContentCopyIcon />}
          onClick={handleCopyError}
          sx={{ mt: 2 }}
        >
          Copy Error Details
        </Button>
      </Paper>
    </Box>
  );
};

export default ErrorScreen;

