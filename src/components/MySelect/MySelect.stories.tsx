import React, {useState} from 'react';
import {Meta, Story} from "@storybook/react/types-6-0";
import {action} from "@storybook/addon-actions";
import {MySelect, MySelectPropsType} from "./MySelect";

const onValueClick = action('some item was clicked')
export default {
    title: 'MySelect',
    component: MySelect,
    argTypes: {
        color: {
            control: 'color', title: {categories: 'colors'}
        }
    }
} as Meta;


const Template: Story<MySelectPropsType> = (args) => <MySelect {...args}/>

export const Collapsed = Template.bind({})
Collapsed.args = {
    collapsedChanger:() => {},
    onValueClick: onValueClick,
    collapsed: true,
    title: 'NeedToBuy',
    items: [{title: 'milk', value: '1'}, {title: "beer", value: '1'}, {title: "vodka", value: '1'}],

}
export const UnCollapsed = Template.bind({})
UnCollapsed.args = {
    collapsedChanger:() => {},
    onValueClick: onValueClick,
    collapsed: false,
    title: 'friends',
    items: [{title: 'вася', value: '1'}, {title: "петя", value: '1'}, {title: "саша", value: '1'}],
}


export const ControlledSelect: Story<MySelectPropsType> = (args) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const collapsedChanger = () => {
        setCollapsed(!collapsed)
    }

    return <MySelect collapsedChanger={collapsedChanger} items={[{title: 'вася', value: '1'},
        {title: "петя", value: '1'}, {title: "саша", value: '1'}]}
                      title={'Users'}
                      collapsed={collapsed}
                      onValueClick={onValueClick}/>
}
