import React, {useState} from "react";

type PropsType = {

}

function OnOff(props: PropsType) {
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
        backgroundColor: on ? 'green' : 'white',
        display: 'inline-block',
        color: on ? 'white' : 'green',
    }
    const offStyle = {
        padding: '5px',
        width: '30px',
        height: '20px',
        border: '1px solid grey',
        borderRadius: '10%',
        backgroundColor: !on ? 'red' : 'white',
        marginLeft: '2px',
        display: 'inline-block',
        color: !on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '15px',
        height: '15px',
        border: '1px solid grey',
        borderRadius: '10px',
        backgroundColor: on ? 'green' : 'red',
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

export default OnOff;