import React from "react";

type AccordionBodyPropsType={
    color?:string
}

export function AccordionBody(props:AccordionBodyPropsType) {
    return (
        <ul style={{color:props.color}}>
            <li>firsTask</li>
            <li>secondTask</li>
            <li>thirdTask</li>
            <li>fourthTask</li>
        </ul>
    )
}