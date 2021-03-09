import React, {useMemo} from "react";
import s from './Star.module.css'

type StarType = {
    selected: boolean
    setRating: (value: 1 | 2 | 3 | 4 | 5 | 0) => void
    value: 1 | 2 | 3 | 4 | 5 | 0

}

export const MemorizedStar = React.memo(Star)

export function Star(props: StarType) {
    const mStar = useMemo(()=>{
        return <span onClick={() => {
            props.setRating(props.value)
        }
        } className={s.star}>{props.selected ?
            <b>star</b> : "star"}</span>
    },[props.selected,props.value,props.setRating])
    return mStar
}