import React from 'react';

import {Meta, Story} from "@storybook/react/types-6-0";
import {UsersMongoRequest} from "./UsersMongoRequest";



export default {
    title: 'request/usersFromMongo',
    component: UsersMongoRequest
} as Meta

const Template: Story< typeof UsersMongoRequest> = (args) => <UsersMongoRequest {...args}/>

export const Main = Template.bind({})
