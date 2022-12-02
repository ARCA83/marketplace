import React from "react";
import {Button, Divider, Drawer, List, ListItemButton, ListItemText } from "@mui/material";
import {styled} from "@mui/system"
import { useUIContext } from "../../context/ui";


const MiddleDivider = styled((props) => (
  <Divider variant="middle"{...props}/>
))``;


export default function AppDrawer() {
  const { drawerOpen, setDrawerOpen } = useUIContext();

  return(
    <Drawer open={true}>
      {drawerOpen && <Button onClick={()=> setDrawerOpen(false)}>
        Close
        </Button>}
      <List>
        <ListItemButton >
            <ListItemText>INICIO</ListItemText>
        </ListItemButton>
        <MiddleDivider/>
        <ListItemButton >
            <ListItemText>CATEGORIAS</ListItemText>
        </ListItemButton>
        <MiddleDivider/>
        <ListItemButton >
            <ListItemText>PRODUCTOS</ListItemText>
        </ListItemButton>
        <MiddleDivider/>
        <ListItemButton >
            <ListItemText>NOSOTROS</ListItemText>
        </ListItemButton>
        <MiddleDivider/>
        <ListItemButton >
            <ListItemText>CONTACTANOS</ListItemText>
        </ListItemButton>
      </List>
    </Drawer>
  );
  
};