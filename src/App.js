import { ThemeProvider } from "@mui/system";
import { Box, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import theme from "./styles/theme";
import AppBar from "./components/appbar";
import Banner from "./components/banner";
import Promotions from "./components/promotions";
import Products from "./components/products";
import Footer from "./components/footer";
import AppDrawer from "./components/drawer";
import { UIProvider } from "./context/ui";

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
        <UIProvider>
          <AppBar />
          <Banner />
          <Promotions />
          <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
            <Typography variant="h4"> Categorias </Typography>
          </Box>
          <Products />
        <Footer />
        <AppDrawer />
        </UIProvider>
      </Container>
    </ThemeProvider>
  );
}

export default App;
