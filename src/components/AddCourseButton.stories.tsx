import React from 'react';
import { Meta } from '@storybook/react';
import AddCourseButton, { Props } from './AddCourseButton';

import { Story } from './Utilities.stories';

export default {
    title: 'Components/AddCourseButton',
    component: AddCourseButton,
    args: {},
    argTypes: { onClick: { action: 'clicked' } },
} as Meta;

export const Template: Story<Props & {
    text: string;
}> = ({ text = 'AddCourseButton', ...args }) => {
    return <AddCourseButton {...args}>{text}</AddCourseButton>
}
