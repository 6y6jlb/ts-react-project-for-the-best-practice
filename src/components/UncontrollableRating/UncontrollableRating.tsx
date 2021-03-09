import React, {useState} from "react";
import {MemorizedStar} from "./Star";
import s from './UncontrollableRating.module.css'

export type UncontrollableRatingPropsType = {

}

export function UncontrollableRating(props:UncontrollableRatingPropsType) {
    const [count, setCount] = useState(1)

    let stars = [
        {value: 1, selected: false},
        {value: 2,selected: false},
        {value: 3,selected: false},
        {value: 4,selected: false},
        {value: 5,selected: false},
    ]
    let newRating = stars.map((s, index) => {
        return <div><MemorizedStar value={s.value} setCount={setCount} selected={index < count}/></div>
    })
    return (
        <div className={s.rating}>
            {newRating}
        </div>
    )
}