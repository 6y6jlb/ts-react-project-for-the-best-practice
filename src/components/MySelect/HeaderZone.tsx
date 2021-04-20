import style from "./MySelect.module.css";
import React, {KeyboardEvent, useMemo} from "react";


type HeaderZonePropsType = {
    collapsed: boolean
    color?:string
    selectedItem: any
    title:string
    onKeyPressArrow:(event: KeyboardEvent<HTMLDivElement>) => void
    collapsedChanger:(collapsedValue: boolean)=>void
}
export function HeaderZone(props: HeaderZonePropsType) {
    console.log('render header')
    const memorizedSpan = useMemo(()=>{
        return (
            <div onKeyDown={props.onKeyPressArrow} tabIndex={1} className={style.selectHead}
                 onClick={() => props.collapsedChanger(!props.collapsed)}>
                <span
                    style={{color: props.color}}>{props.selectedItem ? props.selectedItem.title : props.title}</span>

                <span>▼</span>
            </div>
        )
    },[props.selectedItem,props.collapsedChanger,props.collapsed,props.onKeyPressArrow])
    return memorizedSpan

}
export const HeaderMemo = React.memo(HeaderZone)