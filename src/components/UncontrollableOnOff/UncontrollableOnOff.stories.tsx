import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import {UncontrollableOnOff, UncontrollableOnOffPropsType} from "./uncontrollableOnOff";


const getCategory = (catName:string) => {
    return {
        table:{
            category: catName
        }
    }
}


export default {
    title: 'OnOff/UncontrollableOnOff',
    component: UncontrollableOnOff,
    argTypes: {
        backgroundColorOn: { control: 'color', ...getCategory('colors') },
        backgroundColorOff: { control: 'color',...getCategory('colors') },
    },
} as Meta;

const Template:Story<UncontrollableOnOffPropsType> = (args) => <UncontrollableOnOff {...args}/>;

export const Primary = Template.bind({});
