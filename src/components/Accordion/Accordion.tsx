import React from "react";

import {AccordionBody, ItemAccordionType, MemorizedAccordionBody} from "./AccordionBody";
import AccordionHeadMemo from "./AccordionHead";


export type AccordionPropsType = {
    title:string
    collapsed: boolean
    onClick:(collapsed:boolean)=>void
    color?:string
    items: ItemAccordionType[]
    onValueClick:(value:any)=>void
}


export function Accordion(props:AccordionPropsType) {
    console.log ('render accordion')
    return (
        <div>
            <AccordionHeadMemo title={props.title} onClick={props.onClick} collapsed={props.collapsed} color={props.color}/>
            {props.collapsed&&<MemorizedAccordionBody onValueClick={props.onValueClick} items={props.items} color={props.color} />}

        </div>
    )
}

export const MemorizedAccordion = React.memo(Accordion)

