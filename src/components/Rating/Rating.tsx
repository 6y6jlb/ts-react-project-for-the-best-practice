import React from "react";
import {Star} from "./Star";

type RatingType = {
    value: 1 | 2 | 3 | 4 | 5 | 0
    setRating: (value: 1 | 2 | 3 | 4 | 5 | 0) => void
}

type StarType = {
    selected: boolean
    value: 1 | 2 | 3 | 4 | 5
}

export function Rating(props: RatingType) {

    let stars: Array<StarType> = [
        {selected: false, value: 1},
        {selected: false, value: 2},
        {selected: false, value: 3},
        {selected: false, value: 4},
        {selected: false, value: 5},


    ]

    let newRating = stars.map((s) => {
        return (
            s.value <= props.value ?
                <Star key={s.value} value={s.value} setRating={props.setRating} selected={true}/> :
                <Star key={s.value} value={s.value} setRating={props.setRating} selected={false}/>
        )
    })

    return (
        <div>
            {newRating}
        </div>
    )
}
