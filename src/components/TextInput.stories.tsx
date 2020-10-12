import React from 'react';
import { Meta } from '@storybook/react';

import TextInput, { Props } from './TextInput';

import { Story } from './Utilities.stories';

export default {
    title: 'Components/TextInput',
    component: TextInput,
    args: {
        value: ''
    },
    parameters: {
        backgrounds: {
            default: 'dark'
        }
    },
    argTypes: { onChange: { action: 'changed' } },
} as Meta;

export const Template: Story<Props> = ({ ...args }) => {
    return <div style={{ width: '100%' }}><TextInput {...args} /></div>
}

export const Empty = Template.bind({});
Empty.args = {
    value: ''
};

export const Content = Template.bind({});
Content.args = {
    value: 'This is text in an input.'
};
