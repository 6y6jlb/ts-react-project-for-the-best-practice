import React, {useState} from 'react';
import {Rating, RatingType} from './Rating';
import {action} from "@storybook/addon-actions";
import {Meta, Story} from "@storybook/react/types-6-0";



export default {
    title: 'Rating/Rating',
    component: Rating
} as Meta

const Template: Story<RatingType> = (args) => <Rating {...args}/>


export const ChoiceRating = () => {
    const [value, setValue] = useState<0 | 1 | 2 | 3 | 4 | 5>(1)
    return <Rating value={value} setRating={setValue}/>
}
export const EmptyRating = Template.bind({})
EmptyRating.args={
    setRating: action('zero'),
    value:0
}
export const OneStarRating = Template.bind({})
OneStarRating.args={
    setRating: action('one star'),
    value:1
}
export const TwoStarRating = Template.bind({})
TwoStarRating.args={
    setRating: action('two star'),
    value:2
}
export const ThreeRating = Template.bind({})
ThreeRating.args={
    setRating: action('three star'),
    value:3
}
export const FourStarRating = Template.bind({})
FourStarRating.args={
    setRating: action('four star'),
    value:4
}
export const FiveStarRating = Template.bind({})
FiveStarRating.args={
    setRating: action('five star'),
    value:4
}

