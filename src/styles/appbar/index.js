import {styled} from "@mui/material/styles";
import {List, Typography } from "@mui/material";
import { Box, color } from "@mui/system";
import "@fontsource/montez"
import { ColorLens } from "@mui/icons-material";

//container
export const AppbarContainer = styled(Box)(()=>({

    display: 'flex',
    marginTop: 4,
    justifyContent:'center',
    alignItems:'center',
    padding:'2px 8px',

}));

//header
export const AppbarHeader = styled(Typography)(()=>({

    padding: '4px',
    flexGrow: 1,
    fontSize: '4em',
    fontFamily:'"Montez","cursive"',
    color:color.secondary,
}));

export const MyList = styled(List)(({type})=>({
    display: type === 'row'?'flex':'block',
    flexGrow: 3,
    justifyContent: 'center',
    alignItems:'center',
}));

export const ActionIconsContainerMobile = styled(Box)(()=>({
    display:'flex',
    background:ColorLens.shaft,
    position:'fixed',
    bottom:0,
    left:0,
    width:'100%',
    alignItems:'center',
    zIndex:99,
    borderTop:'1px solid ${Colors.border}'

}))

export const ActionIconsContainerDesktop = styled(Box)(()=>({
    flexGlow:0

}))