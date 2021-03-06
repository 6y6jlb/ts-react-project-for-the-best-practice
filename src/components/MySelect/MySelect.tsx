import style from './MySelect.module.css'
import {useState} from "react";


export type ItemSelectType = {
    title: string
    value: any
}
export type MySelectPropsType = {
    title: string
    collapsed: boolean
    color?: string
    items: ItemSelectType[]
    onValueClick: (value: any) => void
    collapsedChanger: (collapsedValue: boolean) => void
}

export function MySelect(props: MySelectPropsType) {
    const [focus, setFocus] = useState<false | string>(false)


    const onMouseLeaveOption = () => {
        console.log('setTimeout')
        setTimeout(() =>
            props.collapsedChanger(true), 3000)
    }
    const onBlurOption = () => {
        console.log('onBlur')
        props.collapsedChanger(true)
    }

    const mappedItems = props.items.map((i, index) => <div onClick={() => {
        setFocus(i.title)
        props.collapsedChanger(true)
    }}
                                                           className={style.normalItem}
                                                           key={index}>{i.title}</div>)


    return (
        <div className={style.selectFrame}>
            <div className={style.selectHead}
                 onClick={() => props.collapsedChanger(!props.collapsed)}>
                <span
                    style={{color: props.color}}>{focus ? focus : props.title}</span>
                <span>▼</span>
            </div>
            {props.collapsed ? '' : <div onBlur={onBlurOption} tabIndex={0}
                                         onMouseLeave={onMouseLeaveOption}
                                         id={"zone"} className={style.selectBody}>
                {mappedItems}
            </div>}
        </div>
    )
}