import React from "react";
import { Typography, Box, TextareaAutosize } from "@mui/material";

const formatObject = (obj, indent = 1) => {
  if (typeof obj !== "object" || obj === null) {
    return typeof obj === "string" ? `"${obj}"` : `${obj}`;
  }

  const indentation = "\t".repeat(indent);
  let formatted = "{\n";

  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      let value = obj[key];
      let formattedValue =
        typeof value === "object" && value !== null
          ? formatObject(value, indent + 1) // Recursively format objects and arrays
          : typeof value === "string"
          ? `"${value}"`
          : value;

      formatted += `${indentation}${key}: ${formattedValue},\n`;
    }
  }

  formatted += "\t".repeat(indent - 1) + "}";
  return formatted;
};

const Response = ({ data }) => {
  const readableObj = formatObject(data);

  return (
    <Box>
      <Typography mt={2} mb={2} sx={{ color: "white" }}>
        Response
      </Typography>
      <TextareaAutosize
        disabled
        minRows={3}
        value={readableObj}
        style={{
          width: "100%",
          padding: 10,
          background: `url(http://i.imgur.com/2cOaJ.png)`,
          backgroundAttachment: "local",
          backgroundRepeat: "no-repeat",
          paddingLeft: 35,
          paddingTop: 10,
          border: "1px solid #fff",
          borderRadius: "4px",
        }}
      />
    </Box>
  );
};

export default Response;
