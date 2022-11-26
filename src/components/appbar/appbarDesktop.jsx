import { ListItemButton, ListItemText } from "@mui/material";
import React from "react";
import { AppbarContainer, AppbarHeader,MyList,ActionIconsContainerMobile,ActionIconsContainerDesktop } from "../../styles/appbar";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";

export default function AppbarDesktop({ matches} ){

    const Component = matches
    ? ActionIconsContainerMobile
    : ActionIconsContainerDesktop;

    return (
        <Component>
            <AppbarContainer>
            <AppbarHeader>Menina Store</AppbarHeader>
            <MyList type="row">
                <ListItemText primary="Home"/>
                <ListItemText primary="Categorias"/>
                <ListItemText primary="Productos"/>
                <ListItemText primary="Contactanos"/>
                <ListItemButton>
                    <SearchIcon/>
                    
                </ListItemButton>
            </MyList>
            <Actions/>
        </AppbarContainer>
        </Component>
        
    /**
     * Appbar Container
     * Header
     * List
     */
    
    )

    
}