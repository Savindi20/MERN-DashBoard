import React, { useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Button,
  Typography,
  Rating,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Header from "components/Header";
import { useGetProductsQuery } from "state/api";

const Products = () => {
    const { data, isloading} = useGetProductsQuery();
    const isNonMobile = useMediaQuery("min-width: 1000px");
    console.log("data", data);
  return (
    <Box m="1.5rem 2.">
      <Header title="PRODUCTS" subtitle="Check out our products" /> 
    </Box>
  )
}

export default index
