import React from 'react';
import { Meta } from '@storybook/react';
import Toggle, { Props } from './Toggle';

import { Story } from './Utilities.stories';

export default {
  title: 'Components/Toggle',
  component: Toggle,
  args: {
    checked: true
  },
  argTypes: { onChange: { action: 'changed' } },
} as Meta;

export const Template: Story<Props & {
  text: string;
}> = ({ text = 'Toggle', ...args }) => {
  return <Toggle {...args}>{text}</Toggle>
}

export const Checked = Template.bind({});
Checked.args = {
  checked: true
};

export const Unchecked = Template.bind({});
Unchecked.args = {
  checked: false
};
