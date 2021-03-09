import React, {useMemo} from "react";
import s from './Star.module.css'
type StarType = {
    selected: boolean
    setCount:(value:number)=>void
    value: number
}

export const MemorizedStar = React.memo(Star)

export function Star(props:StarType) {
    console.log(`render ${props.value} start`)
    const mStar = useMemo(()=>{
        return <span className={s.star} onClick={()=> {
            props.setCount(props.value)
        }}>{props.selected?<b>star</b>:"star"}</span>
    },[props.value,props.selected])
       return mStar
}