import React from 'react';
import { Meta } from '@storybook/react';
import SideBar, { Props } from './SideBar';

import { Story } from './Utilities.stories';

export default {
    title: 'UI/SideBar',
    component: SideBar,
    args: {}
} as Meta;

export const Template: Story<Props> = ({ ...args }) => {
    return <div style={{ width: '20vw' }}><SideBar {...args} /></div>
}
