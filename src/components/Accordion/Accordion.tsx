import React from "react";
import {AccordionHead} from "./AccordionHead";
import {AccordionBody, ItemAccordionType} from "./AccordionBody";


export type AccordionPropsType = {
    title:string
    collapsed: boolean
    onClick:(collapsed:boolean)=>void
    color?:string
    items: ItemAccordionType[]
    onValueClick:(value:any)=>void
}


export function Accordion(props:AccordionPropsType) {
    return (
        <div>
            <AccordionHead title={props.title} onClick={props.onClick} collapsed={props.collapsed} color={props.color}/>
            {props.collapsed&&<AccordionBody onValueClick={props.onValueClick} items={props.items} color={props.color} />}

        </div>
    )
}

