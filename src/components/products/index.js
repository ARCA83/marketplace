import React from "react";
import { useTheme } from "@emotion/react";
import { Grid, useMediaQuery } from "@mui/material";
import { products } from "../../data";
import { Container } from "@mui/system";

export default function Products() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const renderProducts = products.map((product) => (
    <Grid
      item
      key={product.id}
      disply="flex"
      flexDirection={"column"}
      alignItems="center"
    ></Grid>
  ));

  return (
    <Container>
        <Grid container justifyContent={"center"}
        sx={{margin:'20px 4px 10px 4px'}}>

        {renderProducts}
        </Grid>
    </Container>

  ) ;
}
