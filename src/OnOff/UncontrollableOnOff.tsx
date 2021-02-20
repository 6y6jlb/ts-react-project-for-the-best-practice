import React from "react";

type UncontrollableOnOffPropsType = {
    on: boolean
    onClick: (value: boolean) => void
}


export function UncontrollableOnOff(props: UncontrollableOnOffPropsType) {

    const onStyle = {
        padding: '5px',
        width: '30px',
        height: '20px',
        border: '1px solid grey',
        borderRadius: '10%',
        backgroundColor: props.on ? 'green' : 'white',
        display: 'inline-block',
        color: props.on ? 'white' : 'green',
    }
    const offStyle = {
        padding: '5px',
        width: '30px',
        height: '20px',
        border: '1px solid grey',
        borderRadius: '10%',
        backgroundColor: !props.on ? 'red' : 'white',
        marginLeft: '2px',
        display: 'inline-block',
        color: !props.on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '15px',
        height: '15px',
        border: '1px solid grey',
        borderRadius: '10px',
        backgroundColor: props.on ? 'green' : 'red',
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

