import React from 'react';
import { Meta } from '@storybook/react';
import RemoveCourseButton, { Props } from './RemoveCourseButton';

import { Story } from './Utilities.stories';

export default {
    title: 'Components/RemoveCourseButton',
    component: RemoveCourseButton,
    args: {},
    argTypes: { onClick: { action: 'clicked' } },
} as Meta;

export const Template: Story<Props & {
    text: string;
}> = ({ text = 'RemoveCourseButton', ...args }) => {
    return <RemoveCourseButton {...args}>{text}</RemoveCourseButton>
}
