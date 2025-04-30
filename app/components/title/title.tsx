import { Box } from "@mui/material";
import React from "react";

export function Title() {
  return (
    <Box display="flex" justifyContent="center">
      <span
        style={{
          fontSize: "64px",
          fontWeight: "bold",
          fontFamily: "console",
          marginBottom: "25px",
        }}
      >
        <span style={{ color: "white" }}>Rong</span>
        <span style={{ color: "grey" }}>less</span>
      </span>
    </Box>
  );
}
