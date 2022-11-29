import React from "react";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";

export default function AppbarDesktop({ matches }) {
  return (
    <AppbarContainer>
      <AppbarHeader>Menina Store</AppbarHeader>
      <MyList type="row">
        <ListItemText primary="Home" />
        <ListItemText primary="Categorias" />
        <ListItemText primary="Productos" />
        <ListItemText primary="Contactanos" />
        <ListItemButton>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
        </ListItemButton>
      </MyList>
      <Actions matches={matches} />
    </AppbarContainer>

    /**
     * Appbar Container
     * Header
     * List
     */
  );
}
