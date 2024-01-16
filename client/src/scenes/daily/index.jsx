import React from "react";
import { Box } from "@mui/material";
import Header from "components/Header";
import "react-datepicker/dist/react-datepicker.css";

const Daily = () => {
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="DAILY SALES" subtitle="Chart of daily sales" />
    </Box>
  );
};

export default Daily;
