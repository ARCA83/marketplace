import React from "react";

import { useCallback, useState } from "react";


export default function useDialogModal(Componet){

    const [open, setOpen]=useState(false);

    const openDialog = useCallback(()=> {
        setOpen(true);
    },[]);

const DialogComponent = useCallback(({...props})=>{

    if(!open) return null;

    if (Componet){
        return(
            <Componet open={open} onClose = {()=> setOpen(false)} {...props}/>
        )
    }
},[open, Componet]);

    return [DialogComponent, openDialog];

};
