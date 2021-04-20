import React, {useEffect, useState} from "react";
import style from './Clock.module.css'


const Clock: React.FC<any> = (props) => {
    const [time,setTime]=useState(new Date())
    useEffect(()=>{
        setInterval(()=>{
           setTime(new Date())
        },1000)

    },[])


    const hour = time.getHours()
    const min = time.getMinutes()
    const sec = time.getSeconds()

    const resultTime = `${hour}:${min}:${sec}`

    return <Timer resultTime={resultTime}/>

}
export default Clock;

const Timer =(props:{resultTime:string})=>{
    return <div className={style.timerDisplay}>{ props.resultTime }</div>
}