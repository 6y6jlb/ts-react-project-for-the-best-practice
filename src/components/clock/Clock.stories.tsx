import {Meta, Story} from "@storybook/react/types-6-0";
import React, {useState} from "react";
import Clock from "./Clock";

export default {
    title: 'Clock',
    component: Clock,
    argTypes: {
        color: {
            control: 'color', title: {categories: 'colors'}
        }
    }
} as Meta;


const Template: Story<any> = (args) => {



    return <Clock/>
}

export const Main = Template.bind({})

