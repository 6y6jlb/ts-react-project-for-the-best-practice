import React from "react";

export type ItemAccordionType={
    title:string
    value:any
}

type AccordionBodyPropsType={
    color?:string
    items: ItemAccordionType[]
    onValueClick:(value:any)=>void

}


export function AccordionBody(props:AccordionBodyPropsType) {

    const items = props.items.map((i,index)=><li key={index} onClick={()=>{
        props.onValueClick(i.value)
    }}>♥ {i.title}</li>)

    return (
        <ul style={{color:props.color}}>
            {items}
        </ul>
    )
}