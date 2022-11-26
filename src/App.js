import { ThemeProvider } from "@emotion/react";
import { Button,Container } from "@mui/material";
import React, { useEffect } from "react";
import theme from "./styles/theme";
import AppBar from "./components/appbar";




function App() {
  useEffect(() => {
    document.title = "Gambler Catalogos - Home";
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container
      maxWidth="xl"
      sx={{
        background: '#fff'
      }}
    >
      <AppBar/>

      <Button variant="contained"> Test </Button>
    </Container>
    </ThemeProvider>
    
  );
}

export default App;
