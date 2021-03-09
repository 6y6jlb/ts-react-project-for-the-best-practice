import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import {UncontrollableMemorizedOnOff, UncontrollableOnOff, UncontrollableOnOffPropsType} from "./uncontrollableOnOff";


const getCategory = (catName:string) => {
    return {
        table:{
            category: catName
        }
    }
}


export default {
    title: 'OnOff/UncontrollableOnOff',
    component: UncontrollableMemorizedOnOff,
    argTypes: {
        backgroundColorOn: { control: 'color', ...getCategory('colors') },
        backgroundColorOff: { control: 'color',...getCategory('colors') },
    },
} as Meta;

const Template:Story<UncontrollableOnOffPropsType> = (args) => <UncontrollableMemorizedOnOff {...args}/>;

export const Primary = Template.bind({});
