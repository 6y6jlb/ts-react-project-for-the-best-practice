import style from "./MySelect.module.css";
import React from "react";



type SneakyZonePropsType = {
    collapsed: boolean
    onBlurOption:()=>void
    mappedItems: Array<any>
}

export function SneakyZone(props: SneakyZonePropsType) {
    return <>{
        props.collapsed ? '' : <div
            onBlur={props.onBlurOption}
            id={"zone"} className={style.selectBody}>
            {props.mappedItems}
        </div>}</>
}