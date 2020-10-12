import React from 'react';
import { Meta } from '@storybook/react';
import ClassOverview, { Props } from './ClassOverview';

import { Story } from './Utilities.stories';

export default {
    title: 'UI/ClassOverview',
    component: ClassOverview,
    args: {},
    argTypes: {
        joinChat: { action: 'join-chat' }
    }
} as Meta;

export const Template: Story<Props> = ({ ...args }) => {
    return <div style={{ width: '30vw' }}><ClassOverview {...args} /></div>
}
