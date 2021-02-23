import React from "react";
import s from './Star.module.css'
type StarType = {
    selected: boolean
    setCount:(value:number)=>void
    value: number
}


export function Star(props:StarType) {
       return <span className={s.star} onClick={()=> {
           props.setCount(props.value)
       }}>{props.selected?<b>star</b>:"star"}</span>
}