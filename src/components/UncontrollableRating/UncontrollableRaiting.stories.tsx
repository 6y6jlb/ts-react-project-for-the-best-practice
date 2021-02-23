import React from 'react';
import {UncontrollableRating, UncontrollableRatingPropsType} from './UncontrollableRating';
import {Meta, Story} from "@storybook/react/types-6-0";



export default {
    title: 'Rating/UncontrollableRating',
    component: UncontrollableRating
} as Meta

const Template: Story<UncontrollableRatingPropsType> = (args) => <UncontrollableRating {...args}/>

export const Main = Template.bind({})
