import React from 'react';
import {UncontrollableAccordion, UncontrollableAccordionPropsType} from "./UncontrollableAccordion";
import {Meta, Story} from "@storybook/react/types-6-0";


export default {
    title: 'Accordion/UncontrollableAccordion',
    component: UncontrollableAccordion,
    argTypes: {
        color: {
            control: 'color', title: {categories: 'colors'}
        }
    }
} as Meta;

const Template: Story<UncontrollableAccordionPropsType> = (args) => <UncontrollableAccordion {...args}/>

export const Primary = Template.bind({})
