import React from 'react';
import { Meta } from '@storybook/react';
import Button, { Props } from './Button';

import { Story } from './Utilities.stories';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    theme: 'primary'
  },
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

export const Template: Story<Props & {
  text: string;
}> = ({ text = 'Button', ...args }) => {
  return <Button {...args}>{text}</Button>
}

export const Primary = Template.bind({});
Primary.args = {
  theme: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  theme: 'secondary'
};

Secondary.parameters = {
  backgrounds: {
    default: 'dark'
  }
};

export const Transparent = Template.bind({});
Transparent.args = {
  theme: 'transparent'
};
