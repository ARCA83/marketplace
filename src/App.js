import { ThemeProvider } from "@emotion/react";
import { Container } from "@mui/material";
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
        <Products/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
