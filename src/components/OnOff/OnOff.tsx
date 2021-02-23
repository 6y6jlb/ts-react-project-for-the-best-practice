import React from "react";

export type OnOffPropsType = {
    on: boolean
    onClick: (value: boolean) => void
    backgroundColorOn?:string
    backgroundColorOff?:string

}


export function OnOff(props:OnOffPropsType) {
    const backgroundColorOn = props.backgroundColorOn
    const backgroundColorOff = props.backgroundColorOff


    const onStyle = {
        padding: '5px',
        width: '30px',
        height: '20px',
        border: '1px solid grey',
        borderRadius: '10%',
        backgroundColor: props.on ? (backgroundColorOn||'green' ): 'white',
        display: 'inline-block',
        color: props.on ? 'white' : (backgroundColorOn||'green' ),
    }
    const offStyle = {
        padding: '5px',
        width: '30px',
        height: '20px',
        border: '1px solid grey',
        borderRadius: '10%',
        backgroundColor: !props.on ? (backgroundColorOff||'red') : 'white',
        marginLeft: '2px',
        display: 'inline-block',
        color: !props.on ? 'white' : (backgroundColorOff||'red')
    }
    const indicatorStyle = {
        width: '15px',
        height: '15px',
        border: '1px solid grey',
        borderRadius: '10px',
        backgroundColor: props.on? backgroundColorOn || 'green' : backgroundColorOff||'red',
        marginLeft: '5px',
        display: 'inline-block'
    }

    return (
        <div>
            <div style={onStyle} onClick={() => {
                props.onClick(true)

            }}>on
            </div>
            <div style={offStyle} onClick={() => {
                props.onClick(false)
            }}>off
            </div>
            <div style={indicatorStyle}/>
        </div>
    )
}

