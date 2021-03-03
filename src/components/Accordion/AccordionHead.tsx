import React from "react";



export type AccordionHeadPropsType = {
    title:string
    collapsed: boolean
    onClick:(collapsed:boolean)=>void
    color?:string
}

export function AccordionHead(props: AccordionHeadPropsType) {

    return (
        <div onClick={()=>{
            props.onClick(!props.collapsed)
        }}><h3 style={{color:props.color}} >--{props.title}--</h3></div>
    )
}