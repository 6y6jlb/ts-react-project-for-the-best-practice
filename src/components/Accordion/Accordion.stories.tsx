import React from 'react';
import {Accordion, AccordionPropsType} from "./Accordion";
import {Meta, Story} from "@storybook/react/types-6-0";


export default {
    title: 'Accordion/Accordion',
    component: Accordion,
    argTypes: {
        color: {control: 'color', title: {categories: 'colors'}
        }
    }
} as Meta;

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>

export const Primary = Template.bind({})
Primary.args = {
    collapsed: true,
    onClick: () => {
    }
}
export const Secondary = Template.bind({})
Secondary.args = {
    collapsed: false,
    onClick: () => {
    }
}