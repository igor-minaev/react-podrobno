import React, {useState} from 'react';

type RatingPropsType = {}

export const UncontrolledRating = (props: RatingPropsType) => {
    console.log('UncontrolledRating rendering')
    const [value, setValue] = useState<0 | 1 | 2 | 3 | 4 | 5>(0)
    return (
        <div>
            <Star selected={value > 0}/>
            <Star selected={value > 1}/>
            <Star selected={value > 2}/>
            <Star selected={value > 3}/>
            <Star selected={value > 4}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    console.log('Star rendering')
    return <span>{props.selected ? <b>star</b> : 'star'}</span>
}