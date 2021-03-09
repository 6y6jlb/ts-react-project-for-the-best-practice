import style from './MySelect.module.css'
import React, {KeyboardEvent, useEffect, useState} from 'react'
import {SneakyZone} from "./SneakyZone";
import {HeaderMemo} from "./HeaderZone";


export type ItemSelectType = {
    title: string
    value: string
}
export type MySelectPropsType = {
    items: Array<ItemSelectType>
    activeValue: any
    title: string
    color?: string //optional
    onValueClick: (value: any) => void
    collapsedChanger: (collapsedValue: boolean) => void
    collapsed: boolean
}

export function MySelect(props: MySelectPropsType) {
    const selectedItem = props.items.find(i => i.value === props.activeValue)
    const [hoveredElement, setHoveredElement] = useState<any>(props.activeValue | 0) //false
    const hoveredItem = props.items.find(i => i.value === hoveredElement)

    useEffect(() => {
        setHoveredElement(props.activeValue);
    }, [props.activeValue])

    const onBlurOption = () => {
        console.log('onBlur')
        props.collapsedChanger(true)
    }
    const mappedItemOnClick = (value: any) => {
        console.log('mappedOnClick')
        props.onValueClick(value)
        props.collapsedChanger(true)
    }
    const onKeyPressArrow = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
            for (let i = props.activeValue | 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElement) {
                    const pretendElement = event.key === 'ArrowUp'
                        ? props.items[i - 1]
                        : props.items[i + 1]
                    if (pretendElement) {
                        props.onValueClick(pretendElement.value)
                        return
                    }
                }
            }
            if (!selectedItem) {
                props.onValueClick(props.items[0].value)
            }

        }
        if (event.key === 'Enter' || event.key === 'Esc') {
            props.onValueClick(props.activeValue || 0)
            props.collapsedChanger(true)
        }
    }

    const mappedItems = props.items.map((i, index) => <div
        onMouseEnter={() => {
            setHoveredElement(i.value)
        }}
        onClick={() => mappedItemOnClick(i.value)}
        className={style.normalItem + " " + (hoveredItem === i ? style.active : " ")}
        key={index} tabIndex={1}>{i.title}</div>)


    return (
        <div className={style.selectFrame}>
            <HeaderMemo selectedItem={selectedItem} color={props.color} collapsed={props.collapsed}
                        title={props.title}
                        collapsedChanger={props.collapsedChanger}
                        onKeyPressArrow={onKeyPressArrow}/>
            <SneakyZone collapsed={props.collapsed} onBlurOption={onBlurOption} mappedItems={mappedItems}/>
        </div>
    )
}

