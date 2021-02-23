import React, {useState} from "react";

export type UncontrollableOnOffPropsType = {
    backgroundColorOn?:string
    backgroundColorOff?:string
}

export function UncontrollableOnOff(props: UncontrollableOnOffPropsType) {
    const [on, setOn] = useState(false)

    function selectOnOff(value: boolean) {
        setOn(value)
    }

    const onStyle = {
        padding: '5px',
        width: '30px',
        height: '20px',
        border: '1px solid grey',
        borderRadius: '10%',
        backgroundColor: on ? (props.backgroundColorOn||'green' ): 'white',
        display: 'inline-block',
        color: on ? 'white' : (props.backgroundColorOn||'green' )
    }
    const offStyle = {
        padding: '5px',
        width: '30px',
        height: '20px',
        border: '1px solid grey',
        borderRadius: '10%',
        backgroundColor: !on ? (props.backgroundColorOff||'red') : 'white',
        marginLeft: '2px',
        display: 'inline-block',
        color: !on ? 'white' : (props.backgroundColorOff||'red')
    }
    const indicatorStyle = {
        width: '15px',
        height: '15px',
        border: '1px solid grey',
        borderRadius: '10px',
        backgroundColor:  on? props.backgroundColorOn || 'green' : props.backgroundColorOff||'red',
        marginLeft: '5px',
        display: 'inline-block'
    }
    return (
        <div>
            <div style={onStyle} onClick={() => {
                selectOnOff(true)
            }}>on
            </div>
            <div style={offStyle} onClick={() => {
                selectOnOff(false)
            }}>off
            </div>
            <div style={indicatorStyle}/>
        </div>
    )
}
