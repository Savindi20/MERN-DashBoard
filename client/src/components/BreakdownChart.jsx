import React from "react";
import { Box } from "@mui/material";

const BreakdownChart = ({ isDashboard = false }) => {

  return (
    <Box
      height={isDashboard ? "400px" : "100%"}
      width={undefined}
      minHeight={isDashboard ? "325px" : undefined}
      minWidth={isDashboard ? "325px" : undefined}
      position="relative"
    >
    </Box>
  );
};

export default BreakdownChart;
