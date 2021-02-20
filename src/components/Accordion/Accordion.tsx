import React from "react";
import {AccordionHead} from "./AccordionHead";
import {AccordionBody} from "./AccordionBody";

export type AccordionPropsType = {
    collapsed: boolean
    onClick:(collapsed:boolean)=>void
}


export function Accordion(props:AccordionPropsType) {
    return (
        <div>
            <AccordionHead onClick={props.onClick} collapsed={props.collapsed}/>
            {props.collapsed&&<AccordionBody />}

        </div>
    )
}

