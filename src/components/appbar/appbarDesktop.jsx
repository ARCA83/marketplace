import { ListItemButton, ListItemText } from "@mui/material";
import React from "react";
import { AppbarContainer, AppbarHeader,MyList,} from "../../styles/appbar";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";

export default function AppbarDesktop({ matches} ){

    return (
   
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
            <Actions matches={matches}/>
        </AppbarContainer>
       
        
    /**
     * Appbar Container
     * Header
     * List
     */
    
    );

    
};