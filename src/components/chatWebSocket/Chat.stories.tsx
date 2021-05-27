import {Meta, Story} from "@storybook/react/types-6-0";
import React from "react";
import Chat from "./Chat";



export default {
    title: 'Chat',
    component: Chat,
    argTypes: {
        color: {
            control: 'color', title: {categories: 'colors'}
        }
    }
} as Meta;

const Template: Story<any> = (args) => {
    return <Chat/>
}

export const Main = Template.bind ( {} )

