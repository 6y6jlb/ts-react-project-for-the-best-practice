import React from "react";
import { UncontrollableAccordionPropsType } from "./UncontrollableAccordion";

export function UnAccordionBody(props:UncontrollableAccordionPropsType) {

    return (
        <ul style={{color:props.color}}>
            <li>firsTask</li>
            <li>secondTask</li>
            <li>thirdTask</li>
            <li>fourthTask</li>
        </ul>
    )
}