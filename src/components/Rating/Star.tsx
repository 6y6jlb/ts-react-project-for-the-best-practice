import React from "react";
import s from './Star.module.css'

type StarType = {
    selected: boolean
    setRating: (value: 1 | 2 | 3 | 4 | 5 | 0) => void
    value: 1 | 2 | 3 | 4 | 5 | 0

}


export function Star(props: StarType) {

    return <span onClick={() => {
        props.setRating(props.value)
    }
    } className={s.star}>{props.selected ?
        <b>star</b> : "star"}</span>
}