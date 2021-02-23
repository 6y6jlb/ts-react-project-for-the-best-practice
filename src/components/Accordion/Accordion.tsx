import React from "react";
import {AccordionHead} from "./AccordionHead";
import {AccordionBody} from "./AccordionBody";

export type AccordionPropsType = {
    collapsed: boolean
    onClick:(collapsed:boolean)=>void
    color?:string
}


export function Accordion(props:AccordionPropsType) {
    return (
        <div>
            <AccordionHead onClick={props.onClick} collapsed={props.collapsed} color={props.color}/>
            {props.collapsed&&<AccordionBody color={props.color} />}

        </div>
    )
}

