import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import {OnOff, OnOffPropsType} from "./OnOff";
import {action} from "@storybook/addon-actions";

const getCategory = (catName:string) => {
    return {
        table:{
            category: catName
        }
    }
}


export default {
    title: 'OnOff/OnOff',
    component: OnOff,
    argTypes: {
        backgroundColorOn: { control: 'color', ...getCategory('colors') },
        backgroundColorOff: { control: 'color',...getCategory('colors') },
    },

} as Meta;

const Template:Story<OnOffPropsType> = (args) => <OnOff {...args}/>;

export const Primary = Template.bind({});
Primary.args={
    on: true,
    onClick: action('true'),
}

export const Secondary = Template.bind({});
Secondary.args={
    on: false,
    onClick: action('true'),
}
