import React from "react";


type UnAccordionHeadPropsType ={
    setToggle: (toggle:boolean)=>void
    toggle:boolean
    color?:string
}

export function UnAccordionHead(props:UnAccordionHeadPropsType) {
    return (
        <div ><h3 style={{color:props.color}} onClick={()=>{props.setToggle(!props.toggle)}}>Menu</h3></div>
    )
}