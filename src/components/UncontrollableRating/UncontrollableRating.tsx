import React, {useState} from "react";
import {Star} from "./Star";
import s from './UncontrollableRating.module.css'

export function UncontrollableRating() {
    const [count, setCount] = useState(1)

    let stars = [
        {selected: false},
        {selected: false},
        {selected: false},
        {selected: false},
        {selected: false},
    ]
    let newRating = stars.map((s, index) => {
        return (
            index < count ? <div>
                <button onClick={() => {
                    setCount(index + 1)
                }}/>
                <Star selected={true}/></div> : <div>
                <button onClick={() => {
                    setCount(index + 1)
                }}/>
                <Star selected={false}/></div>
        )
    })

    return (
        <div className={s.rating}>
            {newRating}
        </div>
    )
}