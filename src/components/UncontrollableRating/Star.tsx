import React from "react";
import s from './Star.module.css'
type StarType = {
    selected: boolean
}


export function Star(props:StarType) {
       return <span className={s.star}>{props.selected?<b>star</b>:"star"}</span>
}