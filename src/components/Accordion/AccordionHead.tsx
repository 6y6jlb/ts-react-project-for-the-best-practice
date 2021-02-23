import React from "react";
import {AccordionPropsType} from "./Accordion";

export function AccordionHead(props: AccordionPropsType) {

    return (
        <div onClick={()=>{
            props.onClick(!props.collapsed)
        }}><h3 style={{color:props.color}} >Menu</h3></div>
    )
}