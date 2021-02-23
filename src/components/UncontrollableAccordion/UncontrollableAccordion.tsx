import React, {useState} from "react";
import {UnAccordionBody} from "./UnAccordionBody";
import {UnAccordionHead} from "./UnAccordionHead";
import s from './UncontrollableAccordion.module.css'

export type UncontrollableAccordionPropsType = {
    color?:string|undefined
}


export function UncontrollableAccordion(props:UncontrollableAccordionPropsType) {
    const [toggle, setToggle] = useState(false)

    let bodyRender = toggle&&<UnAccordionBody color={props.color} />

    return (
        <div>
            <div className={s.header}><UnAccordionHead toggle={toggle} setToggle={setToggle} color={props.color}/></div>

            {bodyRender}
        </div>
    )
}