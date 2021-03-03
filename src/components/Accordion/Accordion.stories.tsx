import React, {useState} from 'react';
import {Accordion, AccordionPropsType} from "./Accordion";
import {Meta, Story} from "@storybook/react/types-6-0";
import {action} from "@storybook/addon-actions";

const onValueClick = action('some item was clicked')
export default {
    title: 'Accordion/Accordion',
    component: Accordion,
    argTypes: {
        color: {
            control: 'color', title: {categories: 'colors'}
        }
    }
} as Meta;



const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>

export const Collapsed = Template.bind({})
Collapsed.args = {
    onValueClick: onValueClick,
    collapsed: true,
    title: 'NeedToBuy',
    items:[{title:'вася',value:'1'},{title:"петя",value:'1'},{title:"саша",value:'1'}],
    onClick: () => {
    }
}
export const UnCollapsed = Template.bind({})
UnCollapsed.args = {
    onValueClick: onValueClick,
    collapsed: false,
    title: 'NeedToLearn',
    items:[{title:'вася',value:'1'},{title:"петя",value:'1'},{title:"саша",value:'1'}],
    onClick: () => {
    }
}

export const ControlledAccordion: Story<AccordionPropsType> = (args) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const onClick = () => {
        setCollapsed(!collapsed)
    }

    return <Accordion items={[{title:'вася',value:'1'},
        {title:"петя",value:'1'},{title:"саша",value:'1'}]}
                      title={'Users'}
                      collapsed={collapsed}
                      onClick={onClick}
                      onValueClick={onValueClick} />
}
