import { ThemeProvider } from "@mui/system";
import { Box, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import theme from "./styles/theme";
import AppBar from "./components/appbar";
import Banner from "./components/banner";
import Promotions from "./components/promotions";
import Products from "./components/products";

function App() {
  useEffect(() => {
    document.title = "Gambler Catalogos - Home";
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xl"
        sx={{
          background: "#fff",
        }}
      >
        <AppBar />
        <Banner />
        <Promotions/>
        <Box display="flex" justifyContent="center" sx={{p:4}}>
          <Typography variant="h4"> "Se diferente" </Typography>        
        </Box>
        <Products/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
