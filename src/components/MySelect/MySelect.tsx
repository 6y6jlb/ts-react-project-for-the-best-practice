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
    collapsedChanger: () => void
}

export function MySelect(props: MySelectPropsType) {
    const [focus, setFocus] = useState<boolean>(false)
    const focusOptionStyle={
        backgroundColor: focus? 'blue':'white'
    }

    const mappedItems = props.items.map((i,index) => <div style={focusOptionStyle}
                                                  className={style.item}
                                                  onClick={() => props.onValueClick(i.value)}
                                                  key={index} onBlur={()=>setFocus(true)}
                                                  onFocus={()=>setFocus(false)}>{i.title}</div>)
    return (
        <div className={style.selectFrame}>
            <div className={style.selectHead}
                 onClick={(event) => props.collapsedChanger()}>
                <span
                style={{color: props.color}}>{props.title}</span>
                <span>▼</span>
            </div>
            {props.collapsed ? '' : <div className={style.selectBody} >
                {mappedItems}
            </div>}
        </div>
    )
}