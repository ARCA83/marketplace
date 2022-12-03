import React from "react";
import {
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/system";
import { useUIContext } from "../../context/ui";
import { DrawerCloseButton } from "../../styles/appbar";
import CloseIcon from "@mui/icons-material/Close";
import {lighten} from "polished"
import { Colors } from "../../styles/theme";

const MiddleDivider = styled((props) => (
  <Divider variant="middle" {...props} />
))``;

export default function AppDrawer() {

  const { drawerOpen, setDrawerOpen } = useUIContext();

  return (
    <>
    {drawerOpen && (
        <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
          <CloseIcon 
        
            sx={{
              fontSize: "2.5rem",
              color: lighten(0.09, Colors.secondary),
            }}
          />
        </DrawerCloseButton>
      )}
    <Drawer open={drawerOpen}>      
      <List>
        <ListItemButton>
          <ListItemText>INICIO</ListItemText>
        </ListItemButton>
        <MiddleDivider />
        <ListItemButton>
          <ListItemText>CATEGORIAS</ListItemText>
        </ListItemButton>
        <MiddleDivider />
        <ListItemButton>
          <ListItemText>PRODUCTOS</ListItemText>
        </ListItemButton>
        <MiddleDivider />
        <ListItemButton>
          <ListItemText>NOSOTROS</ListItemText>
        </ListItemButton>
        <MiddleDivider />
        <ListItemButton>
          <ListItemText>CONTACTANOS</ListItemText>
        </ListItemButton>
      </List>
    </Drawer>
    </>
  );
}
