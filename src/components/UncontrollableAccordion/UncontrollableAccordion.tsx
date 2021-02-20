import React, {useState} from "react";
import {UnAccordionBody} from "./UnAccordionBody";
import {UnAccordionHead} from "./UnAccordionHead";
import s from './UncontrollableAccordion.module.css'

export function UncontrollableAccordion() {
    const [toggle, setToggle] = useState(false)

    let bodyRender = toggle&&<UnAccordionBody/>

    return (
        <div>
            <div className={s.header}><UnAccordionHead/></div>

            <button className={s.button} onClick={()=>{
                setToggle(!toggle)
            }}>toggle</button>
            {bodyRender}
        </div>
    )
}